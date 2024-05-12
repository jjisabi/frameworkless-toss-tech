class Footer extends HTMLElement {
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
          <div class="max-w-[1064px] m-auto px-[67px] mt-[80px]">
            <div class="flex pb-[50px]">
              <ul class="w-[170px] text-[15px] text-[#6b7684]">
                <li><div class="text-[#333d4b] font-[700] mb-[5px]">토스테크</div></li>
                <li><a href="#">의견 보내기</a></li>
              </ul>
              <ul class="w-[170px] text-[15px] text-[#6b7684]">
                <li><div class="text-[#333d4b] font-[700] mb-[5px]">토스</div></li>
                <li>
                  <a href="#">홈페이지</a>
                </li>
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">채용</a>
                </li>
              </ul>
              <ul class="w-[170px] text-[15px] text-[#6b7684]">
                <li><div class="text-[#333d4b] font-[700] mb-[5px]">고객센터</div></li>
                <li>
                  <a href="#">전화: 1599-4905 (24시간 연중무휴)</a>
                </li>
                <li>
                  <a href="#">이메일: support.toss.im </a>
                </li>
                <li>
                  <a href="#">카카오톡: @toss</a>
                </li>
              </ul>
            </div>
            <address class="text-[#8b95a1] text-[15px]">
              <h1 class="block pb-[16px] font-[700] text-[15px] text-[#333d4b]">㈜비바리퍼블리카</h1>
              Copyright © Viva Republica, Inc. All Rights Reserved.
            </address>
            <ul class="flex gap-x-[8px] py-[80px] ">
              <li>
                <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg"/></a>
              </li>
              <li>
                <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg"/></a>
              </li>
              <li>
                <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg"/></a>
              </li>
              <li>
                <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg"/></a>
              </li>
              <li>
                <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg"/></a>
              </li>
            </ul>
          </div>
      `;
    }
  }
  
  export default Footer;
