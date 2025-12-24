import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";

export async function GET() {
  try {
    const healthCheck = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      version: "0.1.0",
      services: {
        api: "operational",
        database: "checking",
      },
    };

    // Check database connection
    try {
      await connectMongo();
      healthCheck.services.database = "operational";
    } catch (error) {
      healthCheck.services.database = "degraded";
      healthCheck.status = "degraded";
      console.error("Database health check failed:", error);
    }

    // Check required environment variables
    const requiredEnvVars = [
      "ANTHROPIC_API_KEY",
      "MONGODB_URI",
      "NEXTAUTH_SECRET",
    ];

    const missingEnvVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingEnvVars.length > 0) {
      healthCheck.status = "degraded";
      healthCheck.warnings = {
        missingEnvVars: missingEnvVars,
      };
    }

    const statusCode = healthCheck.status === "healthy" ? 200 : 503;

    return NextResponse.json(healthCheck, { status: statusCode });
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error.message,
      },
      { status: 503 }
    );
  }
}
