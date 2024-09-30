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
