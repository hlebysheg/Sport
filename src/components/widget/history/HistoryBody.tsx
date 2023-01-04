import { Typography } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visable: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const textAnimationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visable: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const AlignDiv = styled.div`
  text-align: ${(props) => (props.end ? "end" : "start")};
  padding: auto;
`;

const Paragraph = styled.div`
  width: 60%;
  padding-left: ${(props) => (props.end ? "40%" : "0%")};
  @media (max-width: 800px) {
    width: 85%;
    padding-left: ${(props) => (props.end ? "15%" : "0%")};
  }
`;

export const HistoryBody = () => {
  return (
    <Typography style={{ paddingTop: "4rem" }}>
      <AlignDiv>
        <motion.div
          whileInView={"visable"}
          initial={"hidden"}
          viewport={{ amount: 0.2 }}
        >
          <motion.div custom={2} variants={textAnimation}>
            <Typography.Title level={1}>О нас</Typography.Title>
            <Typography.Paragraph>
              <Paragraph>
                placeholder
                placeholderplaceholderplaceholderplaceholderplaceholder
                placeholder placeholder
              </Paragraph>
            </Typography.Paragraph>
          </motion.div>
        </motion.div>
      </AlignDiv>

      <AlignDiv end>
        <motion.div
          whileInView={"visable"}
          initial={"hidden"}
          custom={2}
          variants={textAnimationRight}
        >
          <Typography.Title level={1}>История</Typography.Title>
          <Typography.Paragraph>
            <Paragraph end>
              placeholder
              placeholderplaceholderplaceholderplaceholderplaceholder
              placeholder placeholder placeholder
              placeholderplaceholderplaceholderplaceholderplaceholder
              placeholder placeholder placeholder
              placeholderplaceholderplaceholderplaceholderplaceholder
            </Paragraph>
          </Typography.Paragraph>
        </motion.div>
      </AlignDiv>

      <AlignDiv>
        <motion.div
          whileInView={"visable"}
          initial={"hidden"}
          custom={2}
          variants={textAnimation}
        >
          <Typography.Title level={1}>История 2</Typography.Title>
          <Typography.Paragraph>
            <Paragraph>
              placeholder
              placeholderplaceholderplaceholderplaceholderplaceholder
              placeholder placeholder
            </Paragraph>
          </Typography.Paragraph>
        </motion.div>
      </AlignDiv>
    </Typography>
  );
};
