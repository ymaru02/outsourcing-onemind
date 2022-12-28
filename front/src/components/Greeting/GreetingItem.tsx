import React from "react";
import {
  InfoDiv,
  FloatImg,
  GreetingBox,
  GreetingP1,
  GreetingP2,
} from "../../styles/Intro";
import pastor1 from "../../img/pastor1.jpg";

export default function GreetingItem() {
  return (
    <InfoDiv>
      <GreetingBox>
        <FloatImg src={pastor1} alt="" float="right" />
        <GreetingP1 fontsize="1vw">
          <GreetingP1 fontsize="1.3vw">할렐루야!</GreetingP1>
          <br />
          저희 교회 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.
          <br />
          존귀하신 우리 주 예수 그리스도의 이름으로 평안을 전합니다.
        </GreetingP1>
        <GreetingP2 fontsize="0.9vw">
          <br />
          한마음 교회는 2007년 4월에 개척한 대한예수교 장로회 합동측 교단에
          소속된 교회입니다. <br />
          개척된 이후 한결같이 부어주신 하나님의 사랑과 은혜로 세워진 교회로서,
          성경을 하나님의 절대적인 말씀으로 믿는 개혁주의 신앙에 근거한
          교회입니다.
          <br />
          <br />
          {/* 한마음 교회는 예수 그리스도를 믿어 구원받은 하나님 나라 공동체입니다.
          <br />
          우리는 교회 공동체를 통하여 하나님을 예배하며, 우리 서로를 사랑으로
          섬기며, 각 사람을 사랑과 선행으로 세우는 하나님의 기쁨이 되는 공동체가
          되기를 소망합니다. <br />
          더불어 절대적인 가치가 무너지고 있는 이 시대 속에서 모든 성도들로
          하여금 하나님의 말씀으로 무장시켜, 이 땅의 많은 사람들을 예수님께로
          인도하는 복음 공동체가 되기를 원합니다. <br />
          겸손하되 당당하게 세상 속에서 그리스도의 향기를 드러내는 제자로
          세우는데 지속적으로 최선을 다할 것입니다.
          <br />
          <br /> */}
          <strong>이를 위해 저희 교회의 비전은 다음의 세 가지입니다.</strong>
          <br />
          <br />
          <GreetingP1 fontsize="1vw">
            첫째, ‘복음을 복음되게(for the Gospel to become the Gospel)’ <br />
            둘째, ‘교회를 교회되게(for the Church to become the Church)’ <br />
            셋째, ‘성도를 성도되게(for the God’s People to become the God’s
            People)’{" "}
          </GreetingP1>
          <br />
          그리고 이러한 교회와 성도가 되기 위해서 저희들은 매일 매일의 삶 속에서
          “not I, but Christ”(갈 2:20)를 고백하는 자들이 되기를 소망합니다.
          <br />
          <br />
          어떤 인생도 주 예수 그리스도가 아니면 결코 채울 수 없는 영혼의
          공허함이 있기 마련입니다. 반면에 남들보다 조금 부족해도 주 예수
          그리스도가 우리와 함께 할 수만 있다면 넉넉히 승리할 수 있습니다.
          <br />
          <br />
          바라기는 주 예수 그리스도와 함께 하는 이 귀한 삶에 여러분을
          초대합니다.
          <br />
          <br />
          <GreetingP2
            fontsize="1.1vw"
            style={{
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            담임목사 서정현 올림
          </GreetingP2>
        </GreetingP2>
      </GreetingBox>
    </InfoDiv>
  );
}
