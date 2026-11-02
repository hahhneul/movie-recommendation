const sourceLinks = {
  boxoffice: 'https://www.kobis.or.kr/kobis/business/main/main.do',
  screening: 'https://www.kobis.or.kr/kobis/business/main/searchMainCaption.do',
  stage: 'https://kopis.or.kr/por/main/main.do',
  ott: 'https://www.vkobis.or.kr/ottSubNewest.do',
  justwatch: 'https://www.justwatch.com/kr'
};

// Snapshot catalog based on public listings checked on 2026-11-02.
const catalog = [
  {title:'극장판 치이카와: 인어 섬의 비밀',medium:'movie',label:'IN CINEMAS',genres:['애니메이션','판타지','코미디'],moods:['따뜻함','가벼움'],detail:'11월 1일 일일 박스오피스 1위. 11월 14일까지 상영 일정이 확인된 작품이에요.',venue:'극장 상영 · 상영 회차는 지역별 확인',source:sourceLinks.boxoffice,sourceLabel:'KOBIS 박스오피스',featured:true},
  {title:'암살자(들)',medium:'movie',label:'IN CINEMAS',genres:['드라마','미스터리','스릴러'],moods:['몰입','여운'],detail:'사건의 이면과 남겨진 의문을 따라가는 범죄 스릴러 취향에 어울려요.',venue:'극장 상영작 · 상영 회차 확인',source:sourceLinks.boxoffice,sourceLabel:'KOBIS 박스오피스'},
  {title:'실낙원',medium:'movie',label:'IN CINEMAS',genres:['드라마','미스터리','SF','스릴러'],moods:['몰입','여운'],detail:'AI로 죽은 이를 재현하는 근미래 설정과 상실을 다룬 심리 스릴러예요.',venue:'극장 상영 · 상영 회차 확인',source:'https://uxn.tving.com/ko/featured-contents/실낙원/',sourceLabel:'CJ ENM 작품 정보'},
  {title:'겨울왕국 [서울]',medium:'musical',label:'ON STAGE',genres:['뮤지컬','판타지','음악'],moods:['몰입','따뜻함'],detail:'익숙한 음악과 판타지 세계를 무대에서 만나는 대형 뮤지컬.',venue:'샤롯데씨어터 · 2026.08.13 – 2027.03.01',source:sourceLinks.stage,sourceLabel:'KOPIS 공연 정보'},
  {title:'엘리자벳',medium:'musical',label:'ON STAGE',genres:['뮤지컬','드라마','음악'],moods:['몰입','여운'],detail:'역사적 인물과 강렬한 음악을 중심에 둔 드라마틱한 무대.',venue:'블루스퀘어 우리은행홀 · 2026.08.16 – 11.15',source:sourceLinks.stage,sourceLabel:'KOPIS 공연 정보'},
  {title:'광화문연가 [서울]',medium:'musical',label:'ON STAGE',genres:['뮤지컬','로맨스','음악'],moods:['여운','따뜻함'],detail:'익숙한 한국 대중음악과 추억의 정서를 함께 즐기고 싶을 때.',venue:'디큐브링크아트센터 · 2026.09.06 – 11.15',source:sourceLinks.stage,sourceLabel:'KOPIS 공연 정보'},
  {title:'꽃의 비밀 [대학로]',medium:'play',label:'ON STAGE',genres:['연극','코미디','드라마'],moods:['가벼움'],detail:'네 여성의 기상천외한 작전을 그리는 유쾌한 코미디 연극.',venue:'링크아트센터 · 2026.09.12 – 11.29',source:sourceLinks.stage,sourceLabel:'KOPIS 공연 정보'},
  {title:'VL [대학로]',medium:'play',label:'ON STAGE',genres:['연극','드라마','미스터리'],moods:['몰입','여운'],detail:'소극장 무대에서 가까이 호흡하는 현재 공연작. 작품 소개와 회차를 확인해 보세요.',venue:'링크더스페이스 2관 · 2026.09.01 – 11.29',source:sourceLinks.stage,sourceLabel:'KOPIS 공연 정보'},
  {title:'바바리안',medium:'ott',label:'ON OTT',genres:['스릴러','미스터리'],moods:['몰입'],platforms:['Wavve','TVING','Cinefox'],detail:'불안한 분위기와 예측하기 힘든 전개를 선호한다면 후보에 올려볼 만해요.',venue:'KOBIS OTT 최신작 목록에 수록 · 제공처 확인',source:sourceLinks.ott,sourceLabel:'KOBIS OTT 최신작'},
  {title:'악행의 일기',medium:'ott',label:'ON OTT',genres:['드라마','스릴러'],moods:['몰입','여운'],platforms:['Wavve','TVING','Watcha'],detail:'인물의 선택과 사건의 흐름에 집중하는 드라마를 찾을 때 추천해요.',venue:'KOBIS OTT 최신작 목록에 수록 · 제공처 확인',source:sourceLinks.ott,sourceLabel:'KOBIS OTT 최신작'},
  {title:'두 번째 계절',medium:'ott',label:'ON OTT',genres:['드라마','로맨스'],moods:['여운','따뜻함'],platforms:['Wavve','Watcha'],detail:'잔잔한 감정선과 관계의 변화를 따라가는 작품을 찾을 때.',venue:'KOBIS OTT 최신작 목록에 수록 · 제공처 확인',source:sourceLinks.ott,sourceLabel:'KOBIS OTT 최신작'},
  {title:'스즈메의 문단속',medium:'ott',label:'ON OTT',genres:['애니메이션','판타지','드라마'],moods:['몰입','따뜻함'],platforms:['Wavve','Watcha','Coupang Play'],detail:'모험과 영상미, 상실을 지나 성장하는 이야기를 함께 즐기고 싶을 때.',venue:'현재 제공 플랫폼·구독/대여 여부 다시 확인',source:'https://www.justwatch.com/kr/영화/suzume-no-tojimari',sourceLabel:'JustWatch 제공처 확인'}
];

const form = document.querySelector('#taste-form');
const resultsNode = document.querySelector('#results');
const countNode = document.querySelector('#match-count');
const introNode = document.querySelector('#results-intro');
const emptyNode = document.querySelector('#empty-state');
const mediumNames = {movie:'영화관',play:'연극',musical:'뮤지컬',ott:'OTT'};

function score(item, genres, mood, mediums, platforms) {
  if (!mediums.includes(item.medium)) return -1;
  const genreHits = genres.filter(genre => item.genres.includes(genre)).length;
  const moodHit = item.moods.includes(mood) ? 1 : 0;
  const platformHit = item.medium !== 'ott' || platforms.length === 0 || (item.platforms || []).some(p => platforms.includes(p));
  if (!platformHit) return -1;
  return genreHits * 3 + moodHit * 2 + (item.featured ? 1 : 0);
}

function cardMarkup(item, points) {
  const genreTags = item.genres.slice(0,3).map(tag => `<span class="tag">${tag}</span>`).join('');
  const platforms = item.platforms?.length ? `<span class="tag">${item.platforms.join(' · ')}</span>` : '';
  const why = points > 0 ? `취향과 ${points >= 5 ? '여러 항목이' : '한 가지가'} 맞아요. ${item.detail}` : item.detail;
  return `<article class="rec-card"><div class="card-top"><span class="category">${item.label} · ${mediumNames[item.medium]}</span><span class="match-score">${points > 0 ? `FIT ${points} PTS` : 'NEW PICK'}</span></div><h3>${item.title}</h3><p class="venue">${item.venue}</p><p class="why">${why}</p><div class="tags">${genreTags}${platforms}</div><a class="card-link" href="${item.source}" target="_blank" rel="noreferrer">${item.sourceLabel}<span>↗</span></a></article>`;
}

function recommend() {
  const data = new FormData(form);
  const mediums = data.getAll('medium');
  const genres = data.getAll('genre');
  const mood = data.get('mood') || '몰입';
  const platforms = data.getAll('platform');
  const ranked = catalog.map(item => ({item, points:score(item,genres,mood,mediums,platforms)}))
    .filter(entry => entry.points >= 0)
    .sort((a,b) => b.points-a.points || Number(Boolean(b.item.featured))-Number(Boolean(a.item.featured)));
  const picks = ranked.filter(entry => entry.points > 0).slice(0,8);
  const visible = picks.length ? picks : ranked.slice(0,6);
  resultsNode.innerHTML = visible.map(({item,points}) => cardMarkup(item,points)).join('');
  emptyNode.hidden = visible.length > 0;
  countNode.textContent = visible.length ? `${visible.length} PICKS` : 'NO MATCH';
  introNode.textContent = visible.length ? `${mediums.map(m=>mediumNames[m]).join(' · ') || '전체'} 중에서 취향이 맞는 작품을 먼저 모았어요.` : '관람 방식이나 OTT 선택을 바꿔 다시 골라보세요.';
}

form.addEventListener('submit', event => {event.preventDefault(); recommend(); document.querySelector('#results-heading').scrollIntoView({behavior:'smooth',block:'start'});});
recommend();
