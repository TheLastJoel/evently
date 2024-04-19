import { Schema, model, models } from "mongoose";

import { Document, Types } from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string; // Optional since not required in the schema
    location?: string; // Optional since not required in the schema
    createdAt?: Date; // Optional because there is a default value
    startDateTime?: Date; // Optional because there is a default value
    endDateTime?: Date; // Optional because there is a default value
    price?: string; // Optional since not required in the schema
    isFree?: boolean; // Optional because there is a default value
    url?: string; // Optional since not required in the schema
    category: {_id: string, name: string} // Assuming this is required even if not explicitly marked in your schema
    organiser: {_id: string, firstname: string, lastname: string}; // Assuming this is required even if not explicitly marked in your schema
}


const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, },
    location: { type: String},
    createdAt: { type: Date, default: Date.now},
    startDateTime: { type: Date, default: Date.now},
    endDateTime: { type: Date, default: Date.now },
    price: { type: String},
    isFree: {type: Boolean, default: false},
    url: { type: String},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    organiser: { type: Schema.Types.ObjectId, ref: 'User'},

})

const Event = models.Event || model('Event', EventSchema);

export default Event;