import PageNav from '../components/PageNav.jsx'
import WorkSection, {
  WorkItem,
  SubSteps,
  TimeDivider,
  WorkNote,
  WorkArrow,
} from '../components/WorkSection.jsx'
import styles from './WorkPage.module.css'

export default function WorkPage({ onBack }) {
  return (
    <div className={styles.page}>
      <PageNav category={{ id: "work", label: "업무순서", icon: "📋", theme: "work" }} onBack={onBack} />

      <div className={styles.container}>

        {/* ── 토요일 ── */}
        <WorkSection title="토요일" icon="📅">
          <WorkItem dot="🪟">
            6시쯤 <strong>창가 서비스 테이블 마감</strong>
          </WorkItem>

          <WorkItem dot="🌅">
            해 지면 <strong>창가 커튼 올리기</strong>
            <SubSteps items={['⚠️ 손님 앉아 계신 쪽은 나중에']} />
          </WorkItem>

          <WorkItem dot="🗑️">
            오픈 옆 <strong>쓰레기통 비우기</strong>
            <SubSteps items={[
              '1. 이물질 묻으면 → 세척하기',
              '2. 깨끗하면 → 뚜껑 뒤집어 놓기',
            ]} />
          </WorkItem>

          <WorkItem dot="📦">
            쓰레기통 <strong>뚜껑 4개 모두 뽑아서</strong> 종이류 쓰레기통 옆에 세워두기
          </WorkItem>

          <TimeDivider label="🛋️ 7시쯤 휴게 30분" />

          <WorkItem dot="🧹"><strong>테이블 닦기</strong></WorkItem>
          <WorkItem dot="🗑️"><strong>모든 일반 쓰레기 모으기</strong></WorkItem>
          <WorkItem dot="✅"><strong>쓰레기 버리기</strong></WorkItem>
        </WorkSection>

        {/* ── 일요일 ── */}
        <WorkSection title="일요일" icon="📅">
          <WorkNote>* 토요일 휴식 전 마감일과 유사</WorkNote>

          <WorkItem dot="🗑️">
            <strong>쓰레기통 뚜껑 4개 세척 후 세워두기</strong>
          </WorkItem>

          <TimeDivider label="⏰ 7:30 이후 마감일" />

          <WorkItem dot="🧹">
            <strong>테이블 닦기 / 쓰레기 모으기 / 오렌지 껍질</strong>
          </WorkItem>

          <WorkArrow />

          <WorkItem dot="⏩">
            8:30쯤 더 빨리 <strong>쓰레기 버리러 가도 됨</strong>
          </WorkItem>

          <WorkItem dot="🧽">
            쓰레기 버리고 오면 <strong>바닥 쓸고 닦기</strong>
          </WorkItem>

          <WorkItem dot="🧃">
            <strong>컵 홀더·뚜껑·빨대 넉넉히 쌓기</strong>
          </WorkItem>

          <WorkItem dot="🪟">
            나머지 <strong>서비스 테이블 9시쯤 마감</strong>
            <SubSteps items={['상황 보고 더 빨리해도 됨']} />
          </WorkItem>

          <WorkItem dot="✅">
            <strong>뚜껑 제자리, 식기류 최대한 제자리</strong>
          </WorkItem>
        </WorkSection>

      </div>
    </div>
  )
}
