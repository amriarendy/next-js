import mongoose, { mongo } from "mongoose";

const VisitorsSchema = new mongoose.Schema({
    visitors: Number,
    location: String,
    device: String,
    premiumUserNo: Number,
    month: String,
}, {timestamps: true});

const visitor = mongoose.models.Visitors || mongoose.model("Visitor", VisitorsSchema);

export default visitor;