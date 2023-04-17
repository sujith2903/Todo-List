(()=>{"use strict";const e=function(){let e,t;const n=document.querySelector(".projects-lists"),o=document.querySelector(".main-content"),r=document.querySelector(".project-title"),s=document.querySelector(".project-description"),l=document.querySelector(".project-due"),d=document.querySelector(".priority"),a=document.querySelector(".task-button"),i=document.querySelector(".all-tasks"),u=function(e){c.myProjectArray[e]===t&&(o.style.display="none"),c.myProjectArray.splice(e,1)};return n.addEventListener("click",(t=>{if(t.target.classList.contains("project")||t.target.classList.contains("deleteSVG")||t.target.classList.contains("editSVG")){let c=t.target.closest(".project-display");e=Array.from(c.parentNode.children).indexOf(c)}})),n.addEventListener("click",(t=>{if(t.target.classList.contains("deleteSVG")){const o=t.target.closest(".project-display");u(e),n.removeChild(o),console.log(c.myProjectArray)}})),n.addEventListener("click",(n=>{n.target.classList.contains("project")&&(o.style.display="flex",t=c.myProjectArray[e],r.textContent=t.title,s.textContent=t.description,l.textContent=t.date,d.textContent=t.priority)})),a.addEventListener("click",(()=>{const e=document.createElement("div");e.classList.add("individual-task"),i.appendChild(e);const t=document.createElement("div");t.classList.add("task-checkbox"),e.appendChild(t),t.innerHTML='<label for="task1-checkbox"></label><input type="checkbox" class = "task-checkbox" id="task1-checkbox" name="checkbox">';const c=document.createElement("div");c.classList.add("task-input"),e.appendChild(c),c.innerHTML='<label for="task1-input"></label><input type="text" class="task-input" id="task1-input" name="task" required>';const n=document.createElement("div");n.classList.add("task-delete-button"),e.appendChild(n),n.innerHTML='<svg class="deleteSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="deleteSVG" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',n.addEventListener("click",(()=>{i.removeChild(e)}))})),{createProjectDiv:function(){const e=document.createElement("button"),t=document.createElement("button"),o=document.createElement("div"),r=document.createElement("div");o.classList.add("project-display"),n.appendChild(o),r.classList.add("project"),r.textContent=c.myProjectArray[c.myProjectArray.length-1].title,o.appendChild(r),e.classList.add("delete-project-button"),e.innerHTML='<svg class="deleteSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="deleteSVG" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',o.appendChild(e),t.classList.add("edit-project-button"),t.innerHTML='<svg class="editSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="editSVG" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>',o.appendChild(t)},deleteProject:u}}(),t=function(){const t=document.querySelector(".add-project"),c=document.querySelector(".add-project-form"),n=document.querySelector("#title"),o=document.querySelector("#description"),r=document.querySelector("#date"),s=document.querySelectorAll(".project-priority-button"),l=document.querySelector(".add"),d=document.querySelector(".cancel");let a=[],i="";return{addProject:t,displayForm:function(){t.style.display="flex",l.addEventListener("click",(s=>{if(""!=n.value){s.preventDefault();const l=function(e,t,c,n){return{title:e,description:t,date:c,priority:n,tasks:[]}}(n.value,o.value,r.value,i);a.push(l),e.createProjectDiv(),console.log(a),t.style.display="none",c.reset()}})),d.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",c.reset()})),t.addEventListener("click",(e=>{e.target==t&&(t.style.display="none")})),s.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),i=e.textContent,console.log(i)}))}))},myProjectArray:a}}(),c=t,n=document.querySelector(".project-button");document.querySelector(".projects-lists"),n.addEventListener("click",c.displayForm)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBVXlDLElBQzlCQSxFQUFNRSxpQkFDTkosRUFBZ0JXLEVBQU9sQyxZQUN2QkYsUUFBUUMsSUFBSXdCLEVBQWEsR0FDNUIsR0FFVCxFQVVJRCxpQkFHUCxDQTlEc0IsR0FnRXZCLElDOURNTSxFQUFhekQsU0FBU0MsY0FBYyxtQkFDcEJELFNBQVNDLGNBQWMsbUJBSTdDd0QsRUFBVzVDLGlCQUFpQixRQUFTSCxFQUFBLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkUHJvamVjdExpc3QgZnJvbSAnLi9hZGRQcm9qZWN0J1xuXG5jb25zdCBkb20gPSAoZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGxldCBpbmRleFxuICAgIGxldCBvcGVuUHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0cycpXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50JylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kdWUnKVxuICAgIGNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpXG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJ1dHRvbicpXG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2tzJylcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpc3BsYXknKVxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcblxuICAgICAgICBwcm9qZWN0VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIHByb2plY3RUaXRsZURpdi50ZXh0Q29udGVudCA9IGFkZFByb2plY3RMaXN0Lm15UHJvamVjdEFycmF5WyhhZGRQcm9qZWN0TGlzdC5teVByb2plY3RBcnJheSkubGVuZ3RoIC0gMV1bJ3RpdGxlJ11cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVEaXYpXG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idXR0b24nKVxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGVsZXRlU1ZHXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBjbGFzcz1cImRlbGV0ZVNWR1wiIGQ9XCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIiAvPjwvc3ZnPidcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKVxuXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24nKVxuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImVkaXRTVkdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGNsYXNzPVwiZWRpdFNWR1wiIGQ9XCJNNSwzQzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOUg1VjVIMTJWM0g1TTE3Ljc4LDRDMTcuNjEsNCAxNy40Myw0LjA3IDE3LjMsNC4yTDE2LjA4LDUuNDFMMTguNTgsNy45MUwxOS44LDYuN0MyMC4wNiw2LjQ0IDIwLjA2LDYgMTkuOCw1Ljc1TDE4LjI1LDQuMkMxOC4xMiw0LjA3IDE3Ljk1LDQgMTcuNzgsNE0xNS4zNyw2LjEyTDgsMTMuNVYxNkgxMC41TDE3Ljg3LDguNjJMMTUuMzcsNi4xMlpcIiAvPjwvc3ZnPidcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ1dHRvbilcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cbiAgICAgICAgaWYgKGFkZFByb2plY3RMaXN0Lm15UHJvamVjdEFycmF5W2luZGV4XSA9PT0gb3BlblByb2plY3QpIHtcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgICAgIH1cblxuICAgICAgICBhZGRQcm9qZWN0TGlzdC5teVByb2plY3RBcnJheS5zcGxpY2UoaW5kZXggLCAxKVxuICAgIH1cblxuICAgIHByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmICgocHJvamVjdC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykpIHx8XG4gICAgICAgICAgICAocHJvamVjdC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVTVkcnKSkgfHxcbiAgICAgICAgICAgIChwcm9qZWN0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRTVkcnKSkpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdCA9IHByb2plY3QudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWRpc3BsYXknKVxuICAgICAgICAgICAgaW5kZXggPSBBcnJheS5mcm9tKHRhcmdldFByb2plY3QucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZih0YXJnZXRQcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZVNWRycpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gcHJvamVjdC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtZGlzcGxheScpXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KGluZGV4KVxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKHByb2plY3REaXYpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZFByb2plY3RMaXN0Lm15UHJvamVjdEFycmF5KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICBvcGVuUHJvamVjdCA9IGFkZFByb2plY3RMaXN0Lm15UHJvamVjdEFycmF5W2luZGV4XVxuXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBvcGVuUHJvamVjdFsndGl0bGUnXVxuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ICA9IG9wZW5Qcm9qZWN0WydkZXNjcmlwdGlvbiddXG4gICAgICAgICAgICBwcm9qZWN0RHVlLnRleHRDb250ZW50ICA9IG9wZW5Qcm9qZWN0WydkYXRlJ11cbiAgICAgICAgICAgIHByb2plY3RQcmlvcml0eS50ZXh0Q29udGVudCAgPSBvcGVuUHJvamVjdFsncHJpb3JpdHknXVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnaW5kaXZpZHVhbC10YXNrJylcbiAgICAgICAgYWxsVGFza3MuYXBwZW5kQ2hpbGQobmV3VGFzaylcblxuICAgICAgICBjb25zdCBuZXdDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2tib3gnKVxuICAgICAgICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KVxuICAgICAgICBuZXdDaGVja2JveC5pbm5lckhUTUwgPSAnPGxhYmVsIGZvcj1cInRhc2sxLWNoZWNrYm94XCI+PC9sYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3MgPSBcInRhc2stY2hlY2tib3hcIiBpZD1cInRhc2sxLWNoZWNrYm94XCIgbmFtZT1cImNoZWNrYm94XCI+J1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0JylcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdJbnB1dClcbiAgICAgICAgbmV3SW5wdXQuaW5uZXJIVE1MID0gJzxsYWJlbCBmb3I9XCJ0YXNrMS1pbnB1dFwiPjwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrLWlucHV0XCIgaWQ9XCJ0YXNrMS1pbnB1dFwiIG5hbWU9XCJ0YXNrXCIgcmVxdWlyZWQ+J1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnV0dG9uJylcbiAgICAgICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKVxuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGVsZXRlU1ZHXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBjbGFzcz1cImRlbGV0ZVNWR1wiIGQ9XCJNMTksNEgxNS41TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOVpcIiAvPjwvc3ZnPidcbiAgICBcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFsbFRhc2tzLnJlbW92ZUNoaWxkKG5ld1Rhc2spXG4gICAgICAgIH0pXG4gICAgXG4gICAgfSlcblxuXG4gICAgLypcblxuICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRQcm9qZWN0TGlzdC5hZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblxuICAgIH0pKi9cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdERpdixcbiAgICAgICAgZGVsZXRlUHJvamVjdFxuICAgIH1cblxufSkoKTtcbiAgICBcbmV4cG9ydCBkZWZhdWx0IGRvbSIsImltcG9ydCBkb20gZnJvbSAnLi9ET00nXG5cbmNvbnN0IGFkZFByb2plY3RMaXN0ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtcHJpb3JpdHktYnV0dG9uJylcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJylcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJylcblxuICAgIGxldCBteVByb2plY3RBcnJheSA9IFtdXG4gICAgbGV0IHByaW9yaXR5VmFsdWUgPSAnJ1xuICAgXG4gICAgY29uc3QgZGlzcGxheUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUscHJpb3JpdHlWYWx1ZSlcbiAgICAgICAgICAgICAgICBteVByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QpXG4gICAgICAgICAgICAgICAgZG9tLmNyZWF0ZVByb2plY3REaXYoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15UHJvamVjdEFycmF5KVxuICAgICAgICAgICAgICAgIGFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhZGRQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJpb3JpdHkuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VmFsdWUgPSBidXR0b24udGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eVZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IHRhc2tzID0gW11cbiAgICAgICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkYXRlLHByaW9yaXR5LHRhc2tzfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGRpc3BsYXlGb3JtLFxuICAgICAgICBteVByb2plY3RBcnJheVxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdExpc3RcblxuIiwiaW1wb3J0IGFkZFByb2plY3RMaXN0IGZyb20gJy4vYWRkUHJvamVjdCdcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzJ1xuaW1wb3J0IGRvbSBmcm9tICcuL0RPTSdcblxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ1dHRvbicpXG5jb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3RzJylcblxuXG5cbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0TGlzdC5kaXNwbGF5Rm9ybSlcblxuZG9tXG4iXSwibmFtZXMiOlsiaW5kZXgiLCJvcGVuUHJvamVjdCIsInByb2plY3RzTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW5Db250ZW50IiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdER1ZSIsInByb2plY3RQcmlvcml0eSIsInRhc2tCdXR0b24iLCJhbGxUYXNrcyIsImRlbGV0ZVByb2plY3QiLCJhZGRQcm9qZWN0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3QiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRhcmdldFByb2plY3QiLCJjbG9zZXN0IiwiQXJyYXkiLCJmcm9tIiwicGFyZW50Tm9kZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsInByb2plY3REaXYiLCJyZW1vdmVDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsIm5ld1Rhc2siLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJuZXdDaGVja2JveCIsImlubmVySFRNTCIsIm5ld0lucHV0IiwidGFza0RlbGV0ZUJ1dHRvbiIsImNyZWF0ZVByb2plY3REaXYiLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiZWRpdFByb2plY3RCdXR0b24iLCJwcm9qZWN0VGl0bGVEaXYiLCJhZGRQcm9qZWN0TGlzdCIsImZvcm0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsIm15UHJvamVjdEFycmF5IiwicHJpb3JpdHlWYWx1ZSIsImRpc3BsYXlGb3JtIiwiZXZlbnQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibmV3UHJvamVjdCIsInRhc2tzIiwiY3JlYXRlUHJvamVjdCIsInB1c2giLCJyZXNldCIsImZvckVhY2giLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9