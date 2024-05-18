class Banner extends HTMLElement {
    constructor() {
      super();
      this.setState();
    }
  
    setState(State){
      this.state = {...State};
      this.render();
    }
  
    render() {    
      this.innerHTML += `
          <section class="py-[60px] px-[24px] bg-[rgba(2,9,19,0.91)]">
            <div class="grid grid-cols-[3fr,7fr] col-gap-5 items-center max-w-[640px] mx-auto">
              <img class='w-full'src="https://static.toss.im/3d/website_code_blue_alpha.png"/>
              <div class="flex flex-col items-start justify-start">
                <div class="flex flex-col items-start justify-start">
                  <h3 class="text-[23px] text-[#ffffff] font-[700] ">토스팀이 만드는 수많은 혁신의 순간들</h3>
                  <div class="text-[17px] text-[#ffffff] mb-[24px]">당신과 함께 만들고 싶습니다.<br/>지금, 토스팀에 합류하세요.</div>
                </div>
                <button type="button" class="bg-[#3182f6] py-[7px] px-[12px] text-[14px] rounded-[4px] text-[#fff]">채용 중인 공고 보기</button>
              </div>
            </div>
        </section>
        `;
      }
    }
    
    export default Banner;
  