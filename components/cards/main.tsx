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
import { useRecoilState, useRecoilValue } from "recoil";
import { progressState } from "@/recoil/atom/atom";
import { getCurrentLevel } from "@/recoil/selectors/selectors";

const Main = ({ num }: { num: number }) => {
  const [progress, setProgress] = useRecoilState(progressState);
  const level = useRecoilValue(getCurrentLevel);
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
