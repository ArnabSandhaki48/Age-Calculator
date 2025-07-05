   const form = document.getElementById("ageForm");
    const dobInput = document.getElementById("dob");
    const result = document.getElementById("result");
    const clearBtn = document.getElementById("clearBtn");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dobValue = dobInput.value;
      if (!dobValue) {
        alert("Please select your date of birth.");
        return;
      }
      const dob = new Date(dobValue);
      const today = new Date();
      const birthDay = dob.getDate();
      const birthMonth = dob.getMonth();
      const currentDay = today.getDate();
      const currentMonth = today.getMonth();
      // Calculate age
      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();
      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      // Alive days
      const diffTime = Math.abs(today - dob);
      const aliveDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      // Birthday Message
      let birthdayMsg = "";
      if (birthDay === currentDay && birthMonth === currentMonth) {
        birthdayMsg = "🎂 Happy Birthday!";
      }
      // Day of the week
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const bornDay = dayNames[dob.getDay()];
      result.innerHTML = `
        ${birthdayMsg ? `<strong>${birthdayMsg}</strong><br><br>` : ""}
        ✅ You are <strong>${years}</strong> years, <strong>${months}</strong> months and <strong>${days}</strong> days old.<br>
        🔢 You have been alive for <strong>${aliveDays}</strong> days.
        🗓️ You were born on a <strong>${bornDay}</strong>.<br>
      `;
    });
    clearBtn.addEventListener("click", function () {
      dobInput.value = "";
      result.innerHTML = "";
    });