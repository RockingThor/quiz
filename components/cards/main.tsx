import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardData } from "@/constants";

const Main = ({ num }: { num: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardData[num].title}</CardTitle>
        <CardDescription>{cardData[num].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default Main;
