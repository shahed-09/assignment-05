// for noakhali flood

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const donation = inputConverter("noakhali-input");
  const noakhaliBalance = numConverter("noakhali-acc");
  const accBalance = numConverter("accBalance");

  if (donation < 0 || isNaN(donation) || donation > accBalance) {
    document.getElementById("noakhali-input").value = "";
    alert("Invalid amount");
    return;
  }

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("noakhali-acc").innerText =
    noakhaliBalance + donation;
  document.getElementById("noakhali-input").value = "";

  // history starts

  const historyContainer = document.getElementById("historySec");

  const noakhaliHistory = document.createElement("div");
  noakhaliHistory.classList.add(
    "p-3",
    "border-2",
    "border-gray-100",
    "rounded-xl",
    "space-y-3"
  );

  noakhaliHistory.innerHTML = `
    <p class = "text-black font-bold text-xl"> ${donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh </P>
    <p class = "text-gray-300 text-base text-sm"> ${new Date().toLocaleDateString()}</P>
  
    `;

  historyContainer.insertBefore(noakhaliHistory, historyContainer.firstChild);
  // history ends
});

// for feni flood

document.getElementById("feni-btn").addEventListener("click", function () {
  const donation = inputConverter("feni-input");
  const feniBalance = numConverter("feni-acc");
  const accBalance = numConverter("accBalance");

  if (donation < 0 || isNaN(donation) || donation > accBalance) {
    document.getElementById("feni-input").value = "";
    alert("Invalid amount");
    return;
  }

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("feni-acc").innerText = feniBalance + donation;
  document.getElementById("feni-input").value = "";

  // history starts

  const historyContainer = document.getElementById("historySec");

  const feniHistory = document.createElement("div");
  feniHistory.classList.add(
    "p-3",
    "border-2",
    "border-gray-100",
    "rounded-xl",
    "space-y-3"
  );

  feniHistory.innerHTML = `
  <p class = "text-black font-bold text-xl"> ${donation} Taka is Donated for famine-2024 at Feni, Bangladesh </P>
  <p class = "text-gray-300 text-base text-sm"> ${new Date().toLocaleDateString()}</P>

  `;

  historyContainer.insertBefore(feniHistory, historyContainer.firstChild);
  // history ends
});

// for quota protest

document.getElementById("quota-btn").addEventListener("click", function () {
  const donation = inputConverter("quota-input");
  const quotaBalance = numConverter("quota-acc");
  const accBalance = numConverter("accBalance");

  if (donation < 0 || isNaN(donation) || donation > accBalance) {
    document.getElementById("quota-input").value = "";
    alert("Invalid amount");
    return;
  }

  document.getElementById("accBalance").innerText = accBalance - donation;
  document.getElementById("quota-acc").innerText = quotaBalance + donation;
  document.getElementById("quota-input").value = "";

  // history starts

  const historyContainer = document.getElementById("historySec");

  const quotaHistory = document.createElement("div");
  quotaHistory.classList.add(
    "p-3",
    "border-2",
    "border-gray-100",
    "rounded-xl",
    "space-y-3"
  );

  quotaHistory.innerHTML = `
    <p class = "text-black font-bold text-xl"> ${donation} Taka is Donated for Quota Protest victims, Bangladesh </P>
    <p class = "text-gray-300 text-base text-sm"> ${new Date().toLocaleDateString()}</P>
  
    `;

  historyContainer.insertBefore(quotaHistory, historyContainer.firstChild);
  // history ends
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
  document.getElementById("footer").classList.add("hidden");
  document.getElementById("historySec").classList.remove("hidden");
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
  document.getElementById("footer").classList.remove("hidden");
  document.getElementById("historySec").classList.add("hidden");
});
