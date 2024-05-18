class DetailBottom extends HTMLElement {
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
        <div class="flex items-center flex-col justify-center mb-[0px] mt-[100px] p-[32px] bg-[#f9fafb] w-full h-auto rounded-lg">
          <h2 class="text-[24px] font-[700] mb-[16px] text-[#6b7684]">재미있게 읽으셨나요?</h2>
          <p class="text-[14px] font-[600] text-[#6b7684] mb-[4px] ">좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
          <div class="flex gap-x-[24px]">
            <div class="text-[30px]">😍</div>
            <div class="text-[30px]">🤔</div>
          </div>
          <div class="mt-[15px]">
            <button class="flex rounded-[12px] py-[8px] px-[35px] w-full bg-[#e8f3ff] text-[15px] text-[#1b64da]" type="button">아티클 공유하기</button>
          </div>
        </div>
        `
      }
    }
    
    export default DetailBottom;
  