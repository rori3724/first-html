<script language="javascript">

function CheckSubmit()
{
  if (document.loginform.username.value == "" ) {
        alert("아이디를 입력해 주세요!");
        return false;
  if (document.loginform.password.value == "" ) {
        alert("비밀번호를 입력해 주세요!");
        return false;
  }
  if (document.loginform.username.value == "1234" && 
      document.loginform.password.value == "1234") {
        alert("성공적으로 로그인하였습니다");
      document.loginform.action="/action_page.html";
  }
  else if (document.loginform.username.value == "준민이" && 
        document.loginform.password.value == "1234") {
        alert("성공적으로 로그인하였습니다");
        document.loginform.action="/action_page.html";
  else if (document.loginform.username.value == "ㅁㄴㅇㄹ" && 
        document.loginform.password.value == "ㅁㄴㅇㄹ") {
        alert("야 너 ㅁㄴㅇㄹ 처셔 로그인하게?어림도 없지!암!");
  } else {
        alert("아이디 또는 비번이 틀렸습니다");
        return false;
  }  
}
