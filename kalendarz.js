const monthNames = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

// przykładowe zajęte dni
const busyDays = {
  "2025-11": [3, 7, 8, 10, 12, 17, 18, 19, 20, 21],
  "2025-12": [4, 12, 22, 24, 25, 26, 28, 31],
};

const currentMonthText = document.getElementById("current-month");
const calendarDays = document.getElementById("calendar-days");
const monthSelect = document.getElementById("month-select");
const monthButton = document.getElementById("month-button");

let currentDate = new Date();

// --- Renderowanie kalendarza ---
function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = firstDay - 1;

  currentMonthText.textContent = `${monthNames[month]} ${year}`;
  calendarDays.innerHTML = "";

  // Dni tygodnia
  const daysHeader = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
  daysHeader.forEach(d => {
    const dayEl = document.createElement("div");
    dayEl.textContent = d;
    dayEl.classList.add("day-name");
    calendarDays.appendChild(dayEl);
  });

  // Puste dni przed początkiem miesiąca
  for (let i = 0; i < prevDays; i++) {
    const empty = document.createElement("div");
    empty.classList.add("day", "empty");
    calendarDays.appendChild(empty);
  }

  // Dni miesiąca
  for (let d = 1; d <= daysInMonth; d++) {
    const day = document.createElement("div");
    day.textContent = d;
    day.classList.add("day");

    const key = `${year}-${String(month + 1).padStart(2, "0")}`;
    if (busyDays[key]?.includes(d)) {
      day.classList.add("busy");
    }

    calendarDays.appendChild(day);
  }
}

// --- Renderowanie listy miesięcy ---
function populateMonthSelect() {
  monthSelect.innerHTML = "";
  monthNames.forEach((name, index) => {
    const option = document.createElement("div");
    option.textContent = name;
    option.classList.add("month-option");

    // Podświetlenie aktualnego miesiąca
    if (index === currentDate.getMonth()) {
      option.classList.add("active-month");
    }

    option.addEventListener("click", () => {
      currentDate.setMonth(index);
      renderCalendar(currentDate);

      // Aktualizacja podświetlenia
      monthSelect.querySelectorAll(".month-option").forEach(opt => opt.classList.remove("active-month"));
      option.classList.add("active-month");

      monthSelect.classList.remove("active");
    });

    monthSelect.appendChild(option);
  });
}

// --- Wyświetlanie/ukrywanie listy miesięcy ---
monthButton.addEventListener("click", () => {
  monthSelect.classList.toggle("active");
});

// Kliknięcie poza menu — zamyka listę
document.addEventListener("click", (e) => {
  if (!e.target.closest(".calendar-header")) {
    monthSelect.classList.remove("active");
  }
});

// --- Tooltip „Zajęty dzień” nad wszystkimi elementami ---
const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.background = "#000";
tooltip.style.color = "#fff";
tooltip.style.padding = "4px 8px";
tooltip.style.borderRadius = "6px";
tooltip.style.fontSize = "12px";
tooltip.style.fontFamily = "'Poppins', sans-serif"; // <-- tu ustawiamy Poppins
tooltip.style.pointerEvents = "none";
tooltip.style.transition = "opacity 0.2s";
tooltip.style.opacity = 0;
tooltip.style.zIndex = 9999;
document.body.appendChild(tooltip);

calendarDays.addEventListener("mouseover", (e) => {
  const target = e.target;
  if (target.classList.contains("day") && target.classList.contains("busy")) {
    const rect = target.getBoundingClientRect();
    tooltip.textContent = "Zajęty dzień";
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 30}px`; // nad dniem
    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.opacity = 1;
  }
});

calendarDays.addEventListener("mouseout", (e) => {
  const target = e.target;
  if (target.classList.contains("day") && target.classList.contains("busy")) {
    tooltip.style.opacity = 0;
  }
});

// --- Inicjalizacja ---
populateMonthSelect();
renderCalendar(currentDate);
