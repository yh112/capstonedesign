import React, { useState } from "react";
import bgImg from "../assets/bg1.png";
import Navigation from "../components/Navigation";
import empty_circle from "../assets/empty_circle.png";
import circle from "../assets/circle.png";
import x_button from "../assets/Button_x.png";
import pastandpresentcompare1 from "../assets/pastandpresentcompare1.png";
import pastandpresentcompare2 from "../assets/pastandpresentcompare2.png";

const PastandPresent = () => {
  const [selectedKey, setSelectedKey] = useState(5);
  const [bookModal, setBookModal] = useState(false);
  const [compareModal, setCompareModal] = useState(false);
  const past = [
    "매일 어두운 새벽, 부모님을 찾아가 아침 문안을 드리고 아침 음식을 차려야 한다.",
    "부모님 앞에서는 감히 구역질, 트림, 재채기, 기침, 하품, 기지개를 하면 안된다.",
    "일이 크고 작음에 상관 없이 혼자 결정하지 말고 부모님께 여쭙고 진행 해야 한다.",
    "외출을 할 때는 부모님께 가는 곳을 알려드려야 하며, 노는 곳도 일정한 곳이 있어야 한다.",
    "부모님의 잠자리와 거처를 편안하게 하며, 음식 으로 성의껏 봉양해야 한다.",
    "후손을 남기지 않는 것은 가장 큰 불효다.",
    "형제가 경제적으로 어려울 때는 재산을 나누어 도와야 한다.",
    "형제가 전염병에 걸려 목숨이 위태로울 때도 피하지 않고 밤낮으로 간호해야 한다.",
    "형을 아버지와 같이 섬기고, 크고 작은 일을 형에게 물은 뒤 행해야 한다.",
    "형제는 서로의 잘못된 행동을 바로잡고, 올바른 삶을 살도록 이끌어 줘야 한다.",
    "빈궁과 환난에는 친척이 서로 구제해야 한다.",
    "매년 명절마다 일가친척이 모여 함께해야 한다.",
    "남녀가 결합하는 것은 자연의 이치이고 하늘의 뜻이다.",
    "한번 혼례를 치르면 몸을 마칠 때까지 바꾸지 않는다. 그러므로 남편이 죽어도 시집가지 않는다.",
    "장가들 때 가난했다가 나중에 부자가 되었다면 철거지악을 범한 아내 일지라도 버리지 못한다.",
    "지아비가 나쁜 병을 얻었다고 한들 지아비를 버리지 않는다.",
    "매일 어두운 새벽, 시부모를 찾아가 아침 문안을 드리고 며느리는 아침 음식을 차린다.",
    "며느리가 시부모를 섬기는 것도 친정 부모를 섬기는 것과 같이 한다.",
    "평생 친한 벗은 중간에 소식이 끊어졌더라도 언제나 염두에 두었다가 서로 만나게 되면 반갑게 해야 한다.",
    "의리가 중하고 재물이 가벼운 것은 가장 분명한 일이다.",
    "옛 벗이 늙고 궁박하여 나한테 의탁하였다면 대접하는 것이 옳다.",
    "책선은 벗의 도리이다.",
    "아무리 친한 벗이라도 너나들이 해서는 안 된다.",
    "정직한 사람, 성실한 사람, 견문이 많은 사람을 벗으로 삼으면 유익하다.",
    "머리털이 반백인 자가 길에서 물건을 머리에 이고, 등에 지지 않는 것이 예의의 풍속이다.",
    "빨리 걸어서 어른의 앞에 가는 것은 공손치 않다.",
    "재물을 축적하면 이를 흩어 남을 구제해야 한다.",
    "자신의 남다른 것을 믿어서 우월감을 가져서는 안된다",
    "제사란 생전에 봉양하던 마음을 이어서 효도를 계속하는 것이다.",
    "남자와 여자가 물건을 주고받는 것을 직접 하지 않는 것이 예의다.",
  ];
  const present = [
    "2~3일에 한 번은 부모님께 안부 연락을 드려야 한다.",
    "가족 간에는 이해하고 존중하는 마음으로 생리 현상을 받아 들여야 한다.",
    "큰 결정에 대해서만 부모님과 의논하면 된다.",
    "외출 전 부모님께 돌아올 시간과 약속 장소를 말씀 드려야 한다.",
    "자립 후 여유가 생기면, 그동안 받은 보살핌에 보답하는 것이 바람직하다.",
    "자녀를 낳지 않는 선택을 존중해야 한다.",
    "경제적으로 힘든 형제를 금전적으로 돕는 것은 개인의 선택이며 의무는 아니다.",
    "형제가 큰 병이나 사고를 당했 때, 돌보고 책임 질 의무가 있다.",
    "형제는 동등한 관계에서 강제적인 요구와 심부름 등으로 부담을 주면 안된다.",
    "형제는 서로 충고하고 옳은 행동을 권유해야 한다.",
    "가난과 어려움을 겪는 친척을 금전적으로 돕는 것은 의무가 아니다.",
    "명절에는 참석하여 친척과 함께 시간을 보내는 것이 바람직하다.",
    "결혼은 개인의 선택이며, 모든 사람에게 적합한 것은 아니다.",
    "이혼과 재혼을 통해 어려움을 극복하고 새로운 행복을 찾는 것도 좋은 삶의 방식이다.",
    "배우자의 경제적 어려움에 대한 책임을 공유하고 함께 문제를 해결하기 위해 노력해야 한다.",
    "배우자 간에는 아플 때 서로를 돌보고 책임질 의무가 있다.",
    "최소 한달에 한 번은 배우자의 부모님께 안부 인사를 드려야 한다.",
    "배우자의 부모님을 자신의 부모님처럼 생각하고 모셔야 한다.",
    "친구와 멀리 떨어져 있더 라도 한 달에 한 번 정도의 꾸준한 연락을 유지하는 것이 바람직하다.",
    "친구 간에는 금전적인 지원보다 조언, 감정적 지원 등 간접적인 도움으로 친구 관계를 유지하는 것이 좋다.",
    "개인 사정으로 친구의 집에 머물더라도 일주일 이내에 나오는 것이 바람직하다.",
    "친구가 잘못한 행동을 했을 때 충고하는 것이 옳지만, 친구와의 관계를 위해 부드럽게 지적해야 한다.",
    "친한 친구 관계에서는 솔직하고 유머있는 소통을 위해 직설적인 말투와 욕설, 과격한 농담을 사용해도 괜찮다.",
    "정직함, 선량함, 유쾌함을 지닌 사람을 친구로 삼는 것이 좋다.",
    "주변에 어려운 상황에 처한 이웃을 도와야 한다.",
    "연장자에 대한 예의와 존경은 여전히 중요하다.",
    "봉사와 기부는 개인의 자율적인 선택이다.",
    "사람들과의 상호작용에서는 겸손한 자세가 필요하다.",
    "각자의 상황과 가치관을 고려해 조상을 기리는 방법과 범위를 결정하면 된다.",
    "공공장소에서는 손잡기와 어깨동무 정도의 스킨십은괜찮다.",
  ];
  const rows = 6;
  const cols = 5;
  const [hoveredCell, setHoveredCell] = useState({ row: null, col: null });
  const tableData = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const index = i * cols + j;
      row.push(past[index] ? past[index] : "");
    }
    tableData.push(row);
  }
  return (
    <>
      {bookModal && (
        <div className="pp-modal-bg">
          <div className="pp-modal-content">
          </div>
          <img src={x_button} onClick={() => setBookModal(false)}/>
        </div>
      )}
      {compareModal && (
        <div className="pp-modal-bg">
          <div className="pp-modal-content">
          <img src={pastandpresentcompare1}/>
          </div>
          <img src={x_button} onClick={() => setCompareModal(false)}/>
        </div>
      )}
      <div className="background">
        <Navigation selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <div className="pp-container">
          <div className="pp-title">
            <div className="pp-title-left">
              <div className="pp-title-pp">
                <div className="pp-title-set">
                  <img src={empty_circle} />
                  <div className="pp-text">과거</div>
                </div>
                <div className="pp-title-set">
                  <img src={circle} />
                  <div className="pp-text">현재</div>
                </div>
              </div>
              <div className="pp-notice">
                **상자를 눌러 변화된 유교의 행동 규범을 살펴보세요
              </div>
            </div>
            <div className="pp-title-right" onClick={() => setBookModal(true)}>
              참고 서적 보기
            </div>
          </div>
          <div className="pp-content">
            <table
              border="1"
              style={{
                borderCollapse: "collapse",
                width: "100%",
                borderTop: "6px solid black",
              }}
            >
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => {
                      const isHovered =
                        hoveredCell.row === rowIndex &&
                        hoveredCell.col === cellIndex;
                      const cellContent = isHovered
                        ? present[rowIndex * cols + cellIndex]
                        : cell;

                      return (
                        <td
                          key={cellIndex}
                          style={{
                            width: "349px",
                            height: "349px",
                            padding: "10px",
                            textAlign: "center",
                            verticalAlign: "middle",
                            boxSizing: "border-box", // 패딩과 테두리를 포함한 크기를 설정
                            fontFamily: "Chosun",
                            fonSize: "28px",
                            fontWeight: "400",
                            lineHeight: "44px",
                            textAlign: "center",
                            backgroundColor: isHovered
                              ? "rgba(0, 205, 218, 1)"
                              : "", // 호버된 셀의 배경색 설정
                            transition: "background-color 0.3s", // 배경색 전환 효과
                          }}
                          onMouseEnter={() =>
                            setHoveredCell({ row: rowIndex, col: cellIndex })
                          }
                          onMouseLeave={() =>
                            setHoveredCell({ row: null, col: null })
                          }
                          onClick={() => setCompareModal(true)}
                        >
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <img className="background-image" src={bgImg} alt="background" />
      </div>
    </>
  );
};

export default PastandPresent;