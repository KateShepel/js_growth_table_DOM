'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', (e) => {
  const rows = [...document.querySelectorAll('tr')];

  if (rows.length === 2) {
    removeRow.disabled = false;
  }

  if (rows.length < 10) {
    const newRow = document.createElement('tr');
    const columnAmount = getAmountColumns(rows);

    for (let i = 0; i < columnAmount; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    table.append(newRow);
  }

  if (rows.length === 9) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', (e) => {
  const rows = [...document.querySelectorAll('tr')];

  if (rows.length === 10) {
    appendRow.disabled = false;
  }

  if (rows.length > 2) {
    rows.pop();
    table.replaceChildren(...rows);
  }

  if (rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  const rows = [...document.querySelectorAll('tr')];
  const columnAmount = getAmountColumns(rows);

  if (columnAmount === 2) {
    removeColumn.disabled = false;
  }

  if (columnAmount < 10) {
    for (const row of rows) {
      const newCell = document.createElement('td');

      row.append(newCell);
    }

    table.replaceChildren(...rows);
  }

  if (columnAmount === 9) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  const rows = [...document.querySelectorAll('tr')];
  const columnAmount = getAmountColumns(rows);

  if (columnAmount === 10) {
    appendColumn.disabled = false;
  }

  if (columnAmount > 2) {
    for (const row of rows) {
      row.lastElementChild?.remove();
    }

    table.replaceChildren(...rows);
  }

  if (columnAmount === 3) {
    removeColumn.disabled = true;
  }
});

function getAmountColumns(rows) {
  return rows[0].cells.length;
}
