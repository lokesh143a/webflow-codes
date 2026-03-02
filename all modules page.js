// -------------------------all modules page like earlier logic-----------------------------------------

// {
// document.addEventListener("DOMContentLoaded", function () {

//   const mainTabs = document.querySelectorAll(".main-tab");
//   const groups = document.querySelectorAll(".group-wrapper");

//   mainTabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//       const group = tab.getAttribute("data-group");

//       // Hide all group wrappers
//       groups.forEach(g => g.style.display = "none");

//       // Show selected group wrapper
//       const activeGroup = document.querySelector(`.group-wrapper[data-group="${group}"]`);
//       if (activeGroup) activeGroup.style.display = "block";

//       // Remove active class from all main tabs
//       mainTabs.forEach(t => t.classList.remove("active"));

//       // Add active class to clicked main tab
//       tab.classList.add("active");

//       // Trigger first sub-tab inside this group
//       const firstSubTab = activeGroup.querySelector(".tab-link");
//       if (firstSubTab) firstSubTab.click();
//     });
//   });

//   // Show first main tab by default
//   if (mainTabs.length) mainTabs[0].click();

// });


// document.addEventListener("DOMContentLoaded", function () {

//   // Loop through each group-wrapper separately
//   document.querySelectorAll(".group-wrapper").forEach(wrapper => {
//     const tabs = wrapper.querySelectorAll(".tab-link");
//     const contents = wrapper.querySelectorAll(".tab-content");

//     tabs.forEach(tab => {
//       tab.addEventListener("click", function () {
//         const target = this.getAttribute("data-tab");

//         // Hide only contents in this group
//         contents.forEach(c => c.style.display = "none");

//         // Show the clicked tab's content in this group
//         const activeContent = wrapper.querySelector(`.tab-content[data-content="${target}"]`);
//         if (activeContent) {
//           activeContent.style.display = "block";
//         }

//         // Remove active class from all tabs in this group
//         tabs.forEach(t => t.classList.remove("active"));
//         this.classList.add("active");
//       });
//     });

//     // Trigger first sub-tab by default for this group
//     if (tabs.length) tabs[0].click();
//   });

// });}



// -------------------------------all modules page for showing pop up only--------------------------------------------


// //     <div class="popup-overlay" id="tabPopup">
// //   <div class="popup-box">

// //     <svg class="popup-close" viewBox="0 0 24 24">
// //       <path d="M6 6L18 18M6 18L18 6"
// //         stroke="white"
// //         stroke-width="2"
// //         stroke-linecap="round"/>
// //     </svg>

// //     <div class="popup-body"></div>

// //   </div>
// // </div>

// // <style>
// // .popup-overlay {
// //   position: fixed;
// //   inset: 0;
// //   background: rgba(0,0,0,0.7);
// //   display: none;
// //   justify-content: center;
// //   align-items: center;
// //   z-index: 9999;
// // }

// // .popup-box {
// //   background: #00283C;
// //   color: #ffffff;
// //   width: 90%;
// //   max-width: 500px;
// //   max-height: 85vh;
// //   overflow-y: auto;

// //   border-radius: 16px;
// //   padding: 16px 24px 24px 24px;

// //   position: relative;
// // }

// // .popup-close {
// //   position: absolute;
// //   top: 16px;
// //   right: 24px;
// //   width: 32px;
// //   height: 32px;
// //   cursor: pointer;
// // }

// // body.popup-open {
// //   overflow: hidden;
// // }

// // .tab-link.active {
// //   color: #00283C;
// //   font-weight: 600;
// // }

// // .main-tab.active {
// //   font-weight: 600;
// // }
// // </style>

// // <script>
// // document.addEventListener("DOMContentLoaded", function () {

// //   const mainTabs = document.querySelectorAll(".main-tab");
// //   const groups = document.querySelectorAll(".group-wrapper");
// //   const popup = document.getElementById("tabPopup");
// //   const popupBody = popup.querySelector(".popup-body");
// //   const closeBtn = popup.querySelector(".popup-close");

// //   let currentContent = null;
// //   let originalParent = null;

// //   function isMobile() {
// //     return window.innerWidth <= 768;
// //   }

// //   /* ===============================
// //      INITIAL CLEAN STATE
// //   =============================== */

// //   groups.forEach(group => {
// //     group.style.display = "none";
// //     group.querySelectorAll(".tab-content")
// //       .forEach(c => c.style.display = "none");
// //   });

// //   /* ===============================
// //      MAIN TAB CLICK
// //   =============================== */

// //   mainTabs.forEach(tab => {
// //     tab.addEventListener("click", () => {

// //       const groupName = tab.getAttribute("data-group");

// //       groups.forEach(g => {
// //         g.style.display = "none";
// //         g.querySelectorAll(".tab-content")
// //           .forEach(c => c.style.display = "none");
// //       });

// //       const activeGroup = document.querySelector(
// //         `.group-wrapper[data-group="${groupName}"]`
// //       );

// //       if (activeGroup) activeGroup.style.display = "block";

// //       mainTabs.forEach(t => t.classList.remove("active"));
// //       tab.classList.add("active");

// //       // Desktop → auto open first sub tab
// //       if (!isMobile() && activeGroup) {
// //         const firstSub = activeGroup.querySelector(".tab-link");
// //         if (firstSub) firstSub.click();
// //       }

// //     });
// //   });

// //   /* ===============================
// //      SUB TAB CLICK
// //   =============================== */

// //   document.querySelectorAll(".group-wrapper").forEach(wrapper => {

// //     const tabs = wrapper.querySelectorAll(".tab-link");
// //     const contents = wrapper.querySelectorAll(".tab-content");

// //     tabs.forEach(tab => {

// //       tab.addEventListener("click", function () {

// //         const target = this.getAttribute("data-tab");
// //         const activeContent = wrapper.querySelector(
// //           `.tab-content[data-content="${target}"]`
// //         );

// //         if (!activeContent) return;

// //         tabs.forEach(t => t.classList.remove("active"));
// //         this.classList.add("active");

// //         contents.forEach(c => c.style.display = "none");

// //         if (isMobile()) {

// //           popupBody.innerHTML = "";

// //           currentContent = activeContent;
// //           originalParent = activeContent.parentNode;

// //           activeContent.style.display = "block";
// //           popupBody.appendChild(activeContent);

// //           popup.style.display = "flex";
// //           document.body.classList.add("popup-open");

// //         } else {

// //           activeContent.style.display = "block";

// //         }

// //       });

// //     });

// //   });

// //   /* ===============================
// //      AUTO LOAD FIRST TAB
// //   =============================== */


// // if (mainTabs.length) {

// //   if (!isMobile()) {

// //     // Desktop → normal behavior
// //     mainTabs[0].click();

// //   } else {

// //     // Mobile → clean state

// //     // Remove all active states first
// //     mainTabs.forEach(t => t.classList.remove("active"));
// //     document.querySelectorAll(".tab-link")
// //       .forEach(t => t.classList.remove("active"));

// //     // Show only first group
// //     const firstGroup = mainTabs[0].getAttribute("data-group");
// //     const firstWrapper = document.querySelector(
// //       `.group-wrapper[data-group="${firstGroup}"]`
// //     );

// //     if (firstWrapper) firstWrapper.style.display = "block";

// //     // Activate only first main tab
// //     mainTabs[0].classList.add("active");
// //   }

// // }

// //   /* ===============================
// //      CLOSE POPUP
// //   =============================== */

// //   function closePopup() {

// //     if (currentContent && originalParent) {
// //       originalParent.appendChild(currentContent);
// //       currentContent.style.display = "none";
// //     }

// //     popup.style.display = "none";
// //     document.body.classList.remove("popup-open");
// //   }

// //   closeBtn.addEventListener("click", closePopup);

// //   popup.addEventListener("click", function(e){
// //     if(e.target === popup) closePopup();
// //   });

// //   /* ===============================
// //      RESIZE FIX (IMPORTANT)
// //   =============================== */

// //   window.addEventListener("resize", function () {

// //     // Close popup always
// //     closePopup();

// //     groups.forEach(group => {

// //       group.querySelectorAll(".tab-content")
// //         .forEach(c => c.style.display = "none");

// //       group.querySelectorAll(".tab-link")
// //         .forEach(t => t.classList.remove("active"));

// //     });

// //     if (!isMobile() && mainTabs.length) {
// //       mainTabs[0].click(); // Re-initialize desktop
// //     }

// //   });

// // });
// // </script>



// // -----------------------all modules page for showing pop up only  with new design and new logic with buttons------------------- 

// <div class="popup-overlay" id="tabPopup">
//   <div class="popup-box">

//     <svg class="popup-close" viewBox="0 0 24 24">
//       <path d="M6 6L18 18M6 18L18 6"
//         stroke="white"
//         stroke-width="2"
//         stroke-linecap="round"/>
//     </svg>

//     <div class="popup-body"></div>

//     <div class="popup-nav">
//      <div class="popup-prev">
//   <span class="arrow arrow-left">
//   	<svg viewBox="0 0 24 24" width="28" height="28" fill="none">
//     <path d="M20 12H6"
//           stroke="currentColor"
//           stroke-width="1.4"
//           stroke-linecap="round"/>
//     <path d="M10 7L4 12L10 17"
//           stroke="currentColor"
//           stroke-width="1.4"
//           stroke-linecap="round"
//           stroke-linejoin="round"/>
//   </svg>
//   </span>
//   <span class="prev-label"></span>
// </div>

// <div class="popup-next">
//   <span class="next-label"></span>
//   <span class="arrow arrow-right">
//   	<svg viewBox="0 0 24 24" width="28" height="28" fill="none">
//     <path d="M4 12H18"
//           stroke="currentColor"
//           stroke-width="1.4"
//           stroke-linecap="round"/>
//     <path d="M14 7L20 12L14 17"
//           stroke="currentColor"
//           stroke-width="1.4"
//           stroke-linecap="round"
//           stroke-linejoin="round"/>
//   </svg>
//   </span>
// </div>
//     </div>

//   </div>
// </div>

// <style>
// .popup-overlay {
//   position: fixed;
//   inset: 0;
//   background: rgba(0,0,0,0.7);
//   display: none;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// }

// .popup-box {
//   background: #00283C;
//   color: #ffffff;
//   width: 90%;
//   max-width: 500px;
//   min-height:560px;
//   max-height: 85vh;   /* limit height */
//   overflow-y: auto;   /* ✅ entire popup scrolls */

//   border-radius: 16px;
//   padding: 16px 24px 24px 24px;
//   position: relative;

//   display: flex;
//   flex-direction: column;
// }

// .popup-close {
//   position: absolute;
//   top: 16px;
//   right: 24px;
//   width: 28px;
//   height: 28px;
//   cursor: pointer;
// }

// body.popup-open {
//   overflow: hidden;
// }

// /* Content */
// .popup-body {
//   margin-top: 20px;
// }

// /* Navigation */
// .popup-nav {
//   display: flex;
//   gap: 12px;
//   margin-top: auto; /* exact spacing */
// }

// /* Buttons */
// .popup-prev,
// .popup-next {
//   flex: 1;
//   border-radius: 32.6px;
//   padding: 9.31px 22.12px;
//   background-color: #024069;
//   color: #ffffff;
//   min-height: 32.63px;

//   font-family: 'Inter', sans-serif;
//   font-weight: 700;
//   font-size: 11.5px;
//   line-height: 1;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 6px;
// }

// .arrow svg {
//   display: block;
// }

// /* Smaller arrow */
// .arrow {
//   font-size: 11px;
// }

// /* Hover */
// .popup-prev:hover,
// .popup-next:hover {
//   opacity: 0.85;
// }

// /* Responsive stacking */
// @media (max-width: 400px) {
//   .popup-nav {
//     flex-direction: column;
//   }
// }
// </style>
// <script>
// document.addEventListener("DOMContentLoaded", function () {

//   const mainTabs = document.querySelectorAll(".main-tab");
//   const groups = document.querySelectorAll(".group-wrapper");

//   const popup = document.getElementById("tabPopup");
//   const popupBody = popup.querySelector(".popup-body");
//   const closeBtn = popup.querySelector(".popup-close");

//   const prevBtn = popup.querySelector(".popup-prev");
//   const nextBtn = popup.querySelector(".popup-next");
//   const prevLabel = popup.querySelector(".prev-label");
//   const nextLabel = popup.querySelector(".next-label");

//   let currentTabs = [];
//   let currentIndex = -1;
//   let currentWrapper = null;

//   function isMobile() {
//     return window.innerWidth <= 768;
//   }

//   /* INITIAL CLEAN STATE */
//   groups.forEach(group => {
//     group.style.display = "none";
//     group.querySelectorAll(".tab-content")
//       .forEach(c => c.style.display = "none");
//   });

//   function updateNavButtons() {
//     const prevTab = currentTabs[currentIndex - 1];
//     const nextTab = currentTabs[currentIndex + 1];

//     if (prevTab) {
//       prevBtn.style.visibility = "visible";
//       prevLabel.textContent = prevTab.textContent.trim();
//     } else {
//       prevBtn.style.visibility = "hidden";
//     }

//     if (nextTab) {
//       nextBtn.style.visibility = "visible";
//       nextLabel.textContent = nextTab.textContent.trim();
//     } else {
//       nextBtn.style.visibility = "hidden";
//     }
//   }

//   function openTab(wrapper, tab) {

//     if (!wrapper || !tab) return;

//     const tabs = wrapper.querySelectorAll(".tab-link");
//     const contents = wrapper.querySelectorAll(".tab-content");

//     const target = tab.getAttribute("data-tab");
//     const activeContent = wrapper.querySelector(
//       `.tab-content[data-content="${target}"]`
//     );

//     if (!activeContent) return;

//     tabs.forEach(t => t.classList.remove("active"));
//     tab.classList.add("active");

//     contents.forEach(c => c.style.display = "none");

//     currentWrapper = wrapper;
//     currentTabs = Array.from(tabs);
//     currentIndex = currentTabs.indexOf(tab);

//     updateNavButtons();

//     if (isMobile()) {

//       popupBody.innerHTML = "";

//       const clonedContent = activeContent.cloneNode(true);
//       clonedContent.style.display = "block";   // force visible
//       popupBody.appendChild(clonedContent);

//       popup.style.display = "flex";
//       document.body.classList.add("popup-open");

//     } else {

//       activeContent.style.display = "block";

//     }
//   }

//   prevBtn.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       openTab(currentWrapper, currentTabs[currentIndex - 1]);
//     }
//   });

//   nextBtn.addEventListener("click", function () {
//     if (currentIndex < currentTabs.length - 1) {
//       openTab(currentWrapper, currentTabs[currentIndex + 1]);
//     }
//   });

//   mainTabs.forEach(tab => {
//     tab.addEventListener("click", () => {

//       const groupName = tab.getAttribute("data-group");

//       groups.forEach(g => {
//         g.style.display = "none";
//         g.querySelectorAll(".tab-content")
//           .forEach(c => c.style.display = "none");
//         g.querySelectorAll(".tab-link")
//           .forEach(t => t.classList.remove("active"));
//       });

//       const activeGroup = document.querySelector(
//         `.group-wrapper[data-group="${groupName}"]`
//       );

//       if (activeGroup) activeGroup.style.display = "block";

//       mainTabs.forEach(t => t.classList.remove("active"));
//       tab.classList.add("active");

//       if (!isMobile() && activeGroup) {
//         const firstSub = activeGroup.querySelector(".tab-link");
//         if (firstSub) openTab(activeGroup, firstSub);
//       }

//     });
//   });

//   document.querySelectorAll(".group-wrapper").forEach(wrapper => {
//     wrapper.querySelectorAll(".tab-link").forEach(tab => {
//       tab.addEventListener("click", function () {
//         openTab(wrapper, this);
//       });
//     });
//   });

//   if (mainTabs.length) {

//     if (!isMobile()) {
//       mainTabs[0].click();
//     } else {
//       const firstGroup = mainTabs[0].getAttribute("data-group");
//       const firstWrapper = document.querySelector(
//         `.group-wrapper[data-group="${firstGroup}"]`
//       );
//       if (firstWrapper) firstWrapper.style.display = "block";
//       mainTabs[0].classList.add("active");
//     }
//   }

//   function closePopup() {
//     popup.style.display = "none";
//     document.body.classList.remove("popup-open");
//     popupBody.innerHTML = "";
//   }

//   closeBtn.addEventListener("click", closePopup);

//   popup.addEventListener("click", function(e){
//     if(e.target === popup) closePopup();
//   });

//   window.addEventListener("resize", function () {

//     closePopup();

//     groups.forEach(group => {
//       group.querySelectorAll(".tab-content")
//         .forEach(c => c.style.display = "none");

//       group.querySelectorAll(".tab-link")
//         .forEach(t => t.classList.remove("active"));
//     });

//     currentIndex = -1;
//     currentWrapper = null;
//     currentTabs = [];

//     if (!isMobile() && mainTabs.length) {
//       mainTabs[0].click();
//     }

//   });

// });
// </script>
