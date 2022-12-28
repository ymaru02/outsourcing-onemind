import React, { useEffect, useState } from "react";
import {
  IntroP1,
  IntroP2,
  InfoDiv,
  IntroFirstTitle,
  IntroFirstTitleBox,
  IntroImg,
  IntroNum,
  IntroTitle,
  IntroTitleBox,
  MainIntroBox,
  MainIntroStart,
} from "../../styles/Intro";
import IntroCircle from "../../img/IntroCircle.png";
import IntroBanner from "../../img/IntroBanner.png";

export default function Intro() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);
  return (
    <InfoDiv>
      {innerWidth >= 768 ? (
        <MainIntroBox>
          <img src={IntroBanner} alt="" width="100%" />
          <MainIntroStart>
            <IntroFirstTitleBox>
              <IntroFirstTitle fontsize="30px">한마음교회는</IntroFirstTitle>
            </IntroFirstTitleBox>
            <IntroP1>
              세상에서 하나님 나라로 부름받은 공동체이며 또한 세상으로 보냄을
              받은 공동체라는 이중적인 성격을 가진 공동체입니다. <br />
              우리 모두는 가장 높으신 예수 그리스도의 부름을 받은 자들이기에
              세상 나라를 위해서 살지 않고, 우리를 부르신 예수 그리스도를 위해서
              교회 공동체로 모인자 들입니다. 또한 우리는 보냄받은 공동체입니다.{" "}
              <br />
              {/* 너희는 온 천하에 다니며 만민에게 복음을 전파하라는 지상명령을 이루기
            위해 대구와 세계복음화를 위해 땅끝까지 복음의 증인된 삶을 사는
            공동체입니다. */}
            </IntroP1>
          </MainIntroStart>
        </MainIntroBox>
      ) : (
        <>
          <MainIntroBox>
            <img src={IntroBanner} alt="" width="100%" />
            <MainIntroStart>
              <IntroFirstTitleBox>
                <IntroFirstTitle fontsize="30px">한마음교회는</IntroFirstTitle>
              </IntroFirstTitleBox>
            </MainIntroStart>
          </MainIntroBox>
          <div>
            세상에서 하나님 나라로 부름받은 공동체이며 또한 세상으로 보냄을 받은
            공동체라는 이중적인 성격을 가진 공동체입니다. <br />
            우리 모두는 가장 높으신 예수 그리스도의 부름을 받은 자들이기에 세상
            나라를 위해서 살지 않고, 우리를 부르신 예수 그리스도를 위해서 교회
            공동체로 모인자 들입니다. 또한 우리는 보냄받은 공동체입니다. <br />
          </div>
        </>
      )}
      <div>
        <IntroTitleBox>
          <IntroImg>
            <img src={IntroCircle} alt="" width="55px" height="55px" />
          </IntroImg>
          <IntroNum>1</IntroNum>
          <IntroTitle fontsize="20px">하나님을 경험하는 교회</IntroTitle>
        </IntroTitleBox>
        <IntroP2>
          교회에서 하나님을 경험할 수 없다면, 교회는 존재의 의미를 잃는
          것입니다. <br />
          우리의 믿음이 관념적인 믿음이 아니라 생명력 있는 살아있는 믿음,
          하나님을 체험하고 하나님을 경험하는 삶을 사는 신앙 공동체를
          소망합니다. <br />
          {/* 한마음교회는 대그룹 예배를 통해서 성령의 기름부으심과 그리스도의
          임재가 있는 예배를 드립니다. <br />
          또한 목장모임과 소그룹 모임을 통해서 성도의 교제와 치유, 그리스도의
          사랑을 경험하는 사도행전적 공동체를 소망합니다. */}
        </IntroP2>
      </div>
      <div>
        <IntroTitleBox>
          <IntroImg>
            <img src={IntroCircle} alt="" width="55px" height="55px" />
          </IntroImg>
          <IntroNum>2</IntroNum>
          <IntroTitle fontsize="20px">복음으로 세상을 축복하는 교회</IntroTitle>
        </IntroTitleBox>
        <IntroP2>
          그리스도의 몸인 교회는 그리스도께서 다른 사람을 위해 존재하셨듯이
          교회는 세상을 위한 존재하여야 합니다. <br />
          {/* 하나님 나라 백성은 십자가의 사랑을 말하기 전에 먼저 십자가의 사랑을
          보여주어야 합니다. <br />
          그럴 때에 교회는 세상에 감동을 주고, 함께 하고픈 이웃이 될 수
          있습니다. <br /> */}
          이를 위해 한마음교회는 지역민들에게 지속적인 복음 전도를 하고 있으며,
          해피데이 전도와 지역민 초청 예배, 지역민 방문 행사와 지역민과의
          정기적인 소통을 통해서 이들의 이웃이 되어주고 이들과 함께하는 교회가
          되고자 힘쓰고 있습니다.
        </IntroP2>
      </div>
      <div>
        <IntroTitleBox>
          <IntroImg>
            <img src={IntroCircle} alt="" width="55px" height="55px" />
          </IntroImg>
          <IntroNum>3</IntroNum>
          <IntroTitle fontsize="20px">다음 세대를 준비하는 교회</IntroTitle>
        </IntroTitleBox>
        <IntroP2>
          {/* 하나님의 나라는 미래에서 현재로 침투하는 하나님의 통치입니다. 따라서
          교회는 본질적으로 미래 지향적일 수밖에 없습니다. <br />
          교회는 지금 여기서 일어나는 하나님 나라의 운동에 동참하여 세상을
          변화시키고, 세상에 비전을 던져주고, 미래를 열어가야 합니다. <br />
          이를 위해 <br /> */}
          한마음교회는 자라나는 세대들을 미래의 사역자로 양육하기 위해 끊임없이
          새로운 도전을하고 있습니다. <br />
          또한 한마음교회는 영아부, 주일학교, 중고등부, 대학청년부의 교회학교를
          통하여 세계복음화와 한국 교회의 미래를 짊어지고 나갈 인재를 양성하고
          있습니다.
        </IntroP2>
      </div>
    </InfoDiv>
  );
}
