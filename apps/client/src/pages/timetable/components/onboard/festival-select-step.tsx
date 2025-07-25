import { Button, Description } from '@confeti/design-system';

import {
  WithIndex,
  WithNavigate,
  WithNextStep,
} from '@pages/timetable/types/timetable-onboard-type';

import ProgressBar from './progressbar';
import SkipButton from './skip-button';

import * as styles from './step.css';

interface FestivalSelectProps extends WithNextStep, WithNavigate, WithIndex {
  totalIndex: number;
  currentIndex: number;
  onboardImage?: string;
}

const FestivalSelectStep = ({
  handleNavigate,
  handleNextStep,
  totalIndex,
  currentIndex,
  onboardImage,
}: FestivalSelectProps) => {
  return (
    <section className={styles.timeTableOnboardContainer}>
      <div className={styles.timeTableOnboardContent}>
        <div className={styles.timeTableImageContainer}>
          <Description.Text fontSize={20} descriptionText="원하는">
            <Description.Text fontSize={20} descriptionText={' '} />
            <Description.HighlightedText
              fontSize={20}
              highlightedText="페스티벌"
            />
            <Description.Text fontSize={20} descriptionText="과">
              <Description.Text fontSize={20} descriptionText={' '} />
              <Description.HighlightedText
                fontSize={20}
                highlightedText="날짜"
              />
            </Description.Text>
            <Description.Text fontSize={20} descriptionText={`를 선택하고,`} />
            <Description.Text
              fontSize={20}
              descriptionText={'\n타임라인을 확인해요'}
            />
          </Description.Text>
          <img src={onboardImage} />
          <ProgressBar totalIndex={totalIndex} currentIndex={currentIndex} />
        </div>
        <div className={styles.timeTableOnboardButtonContainer}>
          <Button text="다음" variant="add" onClick={handleNextStep} />
          <SkipButton
            onClick={() => handleNavigate({ isReTry: false })}
            text="SKIP"
          />
        </div>
      </div>
    </section>
  );
};

export default FestivalSelectStep;
