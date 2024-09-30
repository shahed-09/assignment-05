// for noakhali flood

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const donation = inputConverter("noakhali-input");
  const noakhaliBalance = numConverter("noakhali-acc");
  const accBalance = numConverter("accBalance");

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("noakhali-acc").innerText =
    noakhaliBalance + donation;
  document.getElementById("noakhali-input").value = "";
  //   console.log(donation, noakhaliBalance, accBalance);
});

// for feni flood

document.getElementById("feni-btn").addEventListener("click", function () {
  const donation = inputConverter("feni-input");
  const feniBalance = numConverter("feni-acc");
  const accBalance = numConverter("accBalance");

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("feni-acc").innerText = feniBalance + donation;
  document.getElementById("feni-input").value = "";
  //   console.log(donation, noakhaliBalance, accBalance);
});

// for quota protest

document.getElementById("quota-btn").addEventListener("click", function () {
  const donation = inputConverter("quota-input");
  const quotaBalance = numConverter("quota-acc");
  const accBalance = numConverter("accBalance");

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("quota-acc").innerText = quotaBalance + donation;
  document.getElementById("quota-input").value = "";
  //   console.log(donation, noakhaliBalance, accBalance);
});

// history btn class

document.getElementById("history-btn").addEventListener("click", function () {
  document
    .getElementById("donation-btn")
    .classList.remove("text-black", "bg-[#B4F461]");
  document
    .getElementById("donation-btn")
    .classList.add("text-gray-500", "border-2", "rounded-lg");
  document
    .getElementById("history-btn")
    .classList.add("text-black", "bg-[#B4F461]");
  document
    .getElementById("history-btn")
    .classList.remove("text-gray-500", "border-2");
  document.getElementById("main").classList.add("hidden");
});

//donation btn class

document.getElementById("donation-btn").addEventListener("click", function () {
  document
    .getElementById("history-btn")
    .classList.remove("text-black", "bg-[#B4F461]");
  document
    .getElementById("history-btn")
    .classList.add("text-gray-500", "border-2", "rounded-lg");
  document
    .getElementById("donation-btn")
    .classList.add("text-black", "bg-[#B4F461]");
  document
    .getElementById("donation-btn")
    .classList.remove("text-gray-500", "border-2");
  document.getElementById("main").classList.remove("hidden");
});
