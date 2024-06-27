import connectToDB from "@/database";
import visitor from "@/models/visitors";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDB();
        const getAllVisitorsInfo = await visitor.find({});
        if (getAllVisitorsInfo) {
            return NextResponse.json({
                success: true,
                data: getAllVisitorsInfo,
            });
        } else {
            return NextResponse.json({
                success: false,
                data: 'failed to fetch the visitors, please try again after some time!'
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "Something went wrong!",
        })
    }
}