/*
* pjName : 프로젝트 이름
* pjSkill : 프로젝트 사용 언어
* pjThumb : 프로젝트 리스트 썸네일
* pjImg : 프로젝트 이미지
* pjDesc : 프로젝트 설명
*/

const projectData = [
    //ys
    {
        pjName : "서울 디자인 국제 포럼",
        pjSkill : "html,css,javaScript,jQuery",
        pjDesc : "저는 이런 것들을 했습니다",
    },
    {

    },

]
let skills = projectData[0].pjSkill;
let skillsArray = skills.split(",");
console.log(skillsArray.length);