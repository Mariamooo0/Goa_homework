const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" },
  ];
  
  const filterSelect = document.getElementById("filter");
  const emailList = document.getElementById("emailList");
  
  document.getElementById("filterButton").addEventListener("click", () => {
    emailList.innerHTML = "";
    for (const email of emails) {
      if (email.subject.startsWith(filterSelect.value)) {
        const li = document.createElement("li");
        li.textContent = ${email.subject}: ${email.content};
        emailList.appendChild(li);
      }
    }
  });