// Sidebar toggle functionality
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Data structure for meal types, categories, and items
const menuData = {
  breakfast: {
    categories: [
      { name: 'Kebab', count: 16, active: true },
      { name: 'Burgers', count: 12, active: true },
      { name: 'Pizza', count: 8, active: true },
      { name: 'Soups', count: 7, active: true },
      { name: 'Salads', count: 11, active: true },
      { name: 'Pasta', count: 3, active: true },
      { name: 'Desserts', count: 4, active: true },
      { name: 'Sandwiches', count: 12, active: true },
      { name: 'Drinks', count: 5, active: true },
      { name: 'Seafood', count: 5, active: true },
      { name: 'Mexic', count: 0, active: true },
    ],
    items: {
      Kebab: [
        { name: 'Chicken Kebab', price: 15.0, active: true },
        { name: 'Lamb Kebab', price: 18.0, active: false },
        { name: 'Beef Kebab', price: 17.5, active: true },
      ],
      Burgers: [
        { name: 'Double Cheese Burger', price: 22.5, active: true },
        { name: 'Veggie Burger', price: 18.0, active: false },
        { name: 'Chicken Burger', price: 20.0, active: true },
      ],
      Pizza: [
        { name: 'Margherita', price: 12.0, active: true },
        { name: 'Pepperoni', price: 14.0, active: true },
      ],
      Soups: [{ name: 'Tomato Soup', price: 8.0, active: true }],
      Salads: [{ name: 'Caesar Salad', price: 10.0, active: true }],
      Pasta: [{ name: 'Spaghetti', price: 12.0, active: true }],
      Desserts: [{ name: 'Pancakes', price: 8.0, active: true }],
      Sandwiches: [{ name: 'Egg Sandwich', price: 9.0, active: true }],
      Drinks: [{ name: 'Orange Juice', price: 4.0, active: true }],
      Seafood: [{ name: 'Fish Fillet', price: 15.0, active: true }],
      Mexic: [],
    },
  },
  lunch: {
    categories: [
      { name: 'Burgers', count: 10, active: true },
      { name: 'Pizza', count: 6, active: true },
      { name: 'Salads', count: 8, active: true },
      { name: 'Pasta', count: 5, active: true },
      { name: 'Sandwiches', count: 9, active: true },
    ],
    items: {
      Burgers: [
        { name: 'Cheeseburger', price: 20.0, active: true },
        { name: 'BBQ Burger', price: 22.0, active: true },
      ],
      Pizza: [{ name: 'Hawaiian', price: 13.0, active: true }],
      Salads: [{ name: 'Greek Salad', price: 11.0, active: true }],
      Pasta: [{ name: 'Lasagna', price: 15.0, active: true }],
      Sandwiches: [{ name: 'Turkey Sandwich', price: 10.0, active: true }],
    },
  },
  dinner: {
    categories: [
      { name: 'Seafood', count: 7, active: true },
      { name: 'Pasta', count: 4, active: true },
      { name: 'Desserts', count: 6, active: true },
      { name: 'Drinks', count: 3, active: true },
    ],
    items: {
      Seafood: [
        { name: 'Grilled Salmon', price: 25.0, active: true },
        { name: 'Shrimp Scampi', price: 22.0, active: true },
      ],
      Pasta: [{ name: 'Fettuccine Alfredo', price: 16.0, active: true }],
      Desserts: [{ name: 'Tiramisu', price: 9.0, active: true }],
      Drinks: [{ name: 'Red Wine', price: 8.0, active: true }],
    },
  },
};

let currentMeal = 'breakfast';
let currentCategory = menuData[currentMeal].categories[0].name;
let currentItem = null;
let currentCategoryToggle = null;

// Function to reset the view when header is clicked
function resetView() {
  selectMeal('breakfast');
  currentCategory = menuData['breakfast'].categories[0].name;
  updateCategoryTabs();
  updateCategorySection();
  updateGridSection();
}

// Function to update meal tabs
function selectMeal(meal) {
  currentMeal = meal;
  currentCategory = menuData[meal].categories[0].name;

  document.querySelectorAll('.meal-tab').forEach((tab) => {
    if (tab.dataset.meal === meal) {
      tab.classList.remove('bg-gray-200', 'text-black');
      tab.classList.add('bg-black', 'text-white', 'active');
    } else {
      tab.classList.remove('bg-black', 'text-white', 'active');
      tab.classList.add('bg-gray-200', 'text-black');
    }
  });

  updateCategoryTabs();
  updateCategorySection();
  updateGridSection();
}

// Function to update category tabs
function updateCategoryTabs() {
  const categoryTabs = document.getElementById('category-tabs');
  categoryTabs.innerHTML = '';
  menuData[currentMeal].categories.forEach((category) => {
    const button = document.createElement('button');
    button.className =
      category.name === currentCategory
        ? 'category-tab bg-black text-white px-4 py-2 rounded-lg flex items-center active'
        : 'category-tab bg-gray-200 text-black px-4 py-2 rounded-lg flex items-center';
    button.innerHTML = `
            ${category.name}
            <span class="ml-2 bg-white text-black rounded-full h-5 w-5 flex items-center justify-center">${category.count}</span>
          `;
    button.onclick = () => selectCategory(category.name);
    categoryTabs.appendChild(button);
  });
}

// Function to select a category
function selectCategory(category) {
  currentCategory = category;
  updateCategoryTabs();
  updateCategorySection();
  updateGridSection();
}

// Function to update category section
function updateCategorySection() {
  const categoryTitle = document.getElementById('category-title');
  const category = menuData[currentMeal].categories.find(
    (cat) => cat.name === currentCategory
  );
  const count = category.count;
  categoryTitle.innerHTML = `
          Whole "${currentCategory}" Category <span class="text-gray-500">${count} Items</span>
        `;
  const categoryToggle = document.getElementById('categoryToggle');
  const categoryStatus = document.getElementById('category-status');
  categoryToggle.checked = category.active;
  categoryStatus.textContent = category.active ? 'Active' : 'Inactive';
  categoryStatus.className = category.active
    ? 'ml-2 text-green-500'
    : 'ml-2 text-gray-500';
}

// Function to update grid section
function updateGridSection() {
  const gridSection = document.getElementById('grid-section');
  gridSection.innerHTML = '';
  const category = menuData[currentMeal].categories.find(
    (cat) => cat.name === currentCategory
  );
  if (!category.active) {
    gridSection.innerHTML =
      "<p class='text-center text-gray-500'>This category is inactive.</p>";
    return;
  }
  const items = menuData[currentMeal].items[currentCategory] || [];
  const targetCount = category.count;

  // Populate grid items up to the target count
  for (let i = 0; i < targetCount; i++) {
    const item = items[i % items.length] || {
      name: `Item ${i + 1}`,
      price: 10.0,
      active: true,
    };
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded-lg shadow';
    div.innerHTML = `
            <h3 class="text-lg font-semibold">${item.name}</h3>
            <p class="text-gray-500">$${item.price.toFixed(2)}</p>
            <div class="flex items-center mt-2">
              <label class="toggle-switch">
                <input type="checkbox" ${
                  item.active ? 'checked' : ''
                } onchange="toggleItemStatus('${item.name}', this.checked)" />
                <span class="slider"></span>
              </label>
              <span class="ml-2 ${
                item.active ? 'text-green-500' : 'text-gray-500'
              }">
                ${item.active ? 'Active' : 'Inactive'}
              </span>
            </div>
          `;
    gridSection.appendChild(div);
  }
}

// Function to handle category toggle status
function toggleCategoryStatus(isActive) {
  const category = menuData[currentMeal].categories.find(
    (cat) => cat.name === currentCategory
  );
  if (!isActive) {
    currentCategoryToggle = category;
    const modal = document.getElementById('toggleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    modalTitle.textContent = `Inactivating "${currentCategory}" Category`;
    modalSubtitle.textContent = `What's the reason of inactivating the "${currentCategory}" category?`;
    modal.style.display = 'block';
  } else {
    category.active = true;
    updateCategorySection();
    updateGridSection();
  }
}

// Function to handle item toggle status
function toggleItemStatus(itemName, isActive) {
  const item = menuData[currentMeal].items[currentCategory].find(
    (i) => i.name === itemName
  );
  if (!isActive) {
    currentItem = item;
    const modal = document.getElementById('toggleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    modalTitle.textContent = `Inactivating ${itemName}`;
    modalSubtitle.textContent = `What's the reason of inactivating "${itemName}"?`;
    modal.style.display = 'block';
  } else {
    item.active = true;
    updateGridSection();
  }
}

// Function to toggle the "Other" input field visibility
function toggleOtherInput() {
  const otherInput = document.getElementById('otherReasonInput');
  const selectedReason = document.querySelector('input[name="reason"]:checked');
  if (selectedReason && selectedReason.value === 'other') {
    otherInput.style.display = 'block';
  } else {
    otherInput.style.display = 'none';
    otherInput.value = ''; // Clear the input when hidden
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('toggleModal');
  modal.style.display = 'none';
  // Reset the form
  document.getElementById('reasonForm').reset();
  // Hide the other reason input
  document.getElementById('otherReasonInput').style.display = 'none';
  // Revert toggle states if modal is closed without saving
  if (currentItem) {
    currentItem.active = true;
    updateGridSection();
    currentItem = null;
  }
  if (currentCategoryToggle) {
    currentCategoryToggle.active = true;
    updateCategorySection();
    updateGridSection();
    currentCategoryToggle = null;
  }
}

// Function to save the reason and update the status
function saveReason() {
  const saveButton = document.getElementById('saveButton');
  const form = document.getElementById('reasonForm');
  const reason = form.querySelector('input[name="reason"]:checked');
  const otherReason = document.getElementById('otherReasonInput').value.trim();

  if (!reason) {
    alert('Please select a reason.');
    return;
  }

  if (reason.value === 'other' && !otherReason) {
    alert('Please provide a reason in the text field.');
    return;
  }

  // Change button text to "Saving..." and disable it
  saveButton.textContent = 'Saving...';
  saveButton.disabled = true;

  // Simulate saving process (replace with actual API call if needed)
  setTimeout(() => {
    if (currentItem) {
      console.log(
        `Item ${currentItem.name} deactivated. Reason: ${reason.value}${
          reason.value === 'other' ? ' - ' + otherReason : ''
        }`
      );
      currentItem.active = false;
      updateGridSection();
      currentItem = null;
    }
    if (currentCategoryToggle) {
      console.log(
        `Category ${currentCategoryToggle.name} deactivated. Reason: ${
          reason.value
        }${reason.value === 'other' ? ' - ' + otherReason : ''}`
      );
      currentCategoryToggle.active = false;
      updateCategorySection();
      updateGridSection();
      currentCategoryToggle = null;
    }
    // Revert button to original state and close modal
    saveButton.textContent = 'Save Changes';
    saveButton.disabled = false;
    closeModal();
  }, 1000); // 1-second delay to simulate saving
}

// Initial load
selectMeal('breakfast');
