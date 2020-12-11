import { storiesOf } from "@storybook/react";
import Profile from "Profile";
import React from "react";
import ava from "./ava1.jpg";

export default storiesOf("Profile", module)
  .addDecorator((fn) => (
    <div className="body" style={{ margin: "-1rem" }}>
      {fn()}
    </div>
  ))
  .add("default", () => <Profile />)
  .add("view mode", () => (
    <Profile
      shortName="Иванова А."
      fullName="Иванова Анна Михайловна"
      ava={ava}
    />
  ))
  .add("view mode 2", () => (
    <Profile
      shortName="Одинадцатиклассница А."
      fullName="Одинадцатиклассница Аннастасия Велосипедовна"
    />
  ));
