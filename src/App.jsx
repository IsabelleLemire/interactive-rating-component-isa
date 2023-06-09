import { useState } from "react";
import Card from "./card/Card";
import RatingButton from "./rating-button/RatingButton";
import SubmitButton from "./submit-button/SubmitButton";
import Text from "./text/Text";
import Title from "./title/Title";

function App() {
  const [currentlyClicked, setCurrentlyClicked] = useState(0);

  const onClick = (value) => {
    setCurrentlyClicked((previous) => {
      if (previous === value) return 0;
      return value;
    });
  };

  return (
    <>
      <Card>
        <Title as="h2">How did we do?</Title>
        <Text className="blabla">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Text>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          1
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          2
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          3
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          4
        </RatingButton>
        <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
          5
        </RatingButton>
        <SubmitButton>Submit</SubmitButton>
      </Card>
    </>
  );
}

export default App;
