import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Donation {
  @Prop()
  title: string;

  @Prop()
  quantity: number;
}
export const DonationSchema = SchemaFactory.createForClass(Donation);