(()=>{"use strict";const e=function(){const e=document.querySelector(".add-project"),t=document.querySelector("form"),n=document.querySelector("#title"),c=document.querySelector(".add"),l=document.querySelector(".cancel");return{displayForm:function(){e.style.display="flex",c.addEventListener("click",(c=>{""!=n.value&&(c.preventDefault(),function(){const e=document.querySelector(".projects-list"),t=document.createElement("div");t.classList.add(".project-display"),e.appendChild(t);const c=document.createElement("div");t.textContent=n.value,t.appendChild(c)}(),e.style.display="none",console.log(n.value),t.reset())})),l.addEventListener("click",(n=>{n.preventDefault(),e.style.display="none",t.reset()})),e.addEventListener("click",(t=>{t.target==e&&(e.style.display="none")}))}}}();document.querySelector(".project-button").addEventListener("click",e.displayForm)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUF1REEsRUF2RG1CLFdBRWYsTUFBTUEsRUFBYUMsU0FBU0MsY0FBYyxnQkFDcENDLEVBQU9GLFNBQVNDLGNBQWMsUUFDOUJFLEVBQVFILFNBQVNDLGNBQWMsVUFDL0JHLEVBQVlKLFNBQVNDLGNBQWMsUUFDbkNJLEVBQWVMLFNBQVNDLGNBQWMsV0EyQzVDLE1BQU8sQ0FDSEssWUExQ2dCLFdBRWhCUCxFQUFXUSxNQUFNQyxRQUFVLE9BRTNCSixFQUFVSyxpQkFBaUIsU0FBVUMsSUFDZCxJQUFmUCxFQUFNUSxRQUNORCxFQUFNRSxpQkFxQkssV0FDbkIsTUFBTUMsRUFBZWIsU0FBU0MsY0FBYyxrQkFFdENhLEVBQWFkLFNBQVNlLGNBQWMsT0FDMUNELEVBQVdFLFVBQVVDLElBQUksb0JBQ3pCSixFQUFhSyxZQUFZSixHQUV6QixNQUFNSyxFQUFrQm5CLFNBQVNlLGNBQWMsT0FDL0NELEVBQVdNLFlBQWNqQixFQUFNUSxNQUMvQkcsRUFBV0ksWUFBWUMsRUFFM0IsQ0EvQllFLEdBQ0F0QixFQUFXUSxNQUFNQyxRQUFVLE9BQzNCYyxRQUFRQyxJQUFJcEIsRUFBTVEsT0FDbEJULEVBQUtzQixRQUNULElBR0puQixFQUFhSSxpQkFBaUIsU0FBVUMsSUFDcENBLEVBQU1FLGlCQUNOYixFQUFXUSxNQUFNQyxRQUFVLE9BQzNCTixFQUFLc0IsT0FBTSxJQUdmekIsRUFBV1UsaUJBQWlCLFNBQVVDLElBQzlCQSxFQUFNZSxRQUFVMUIsSUFDaEJBLEVBQVdRLE1BQU1DLFFBQVUsT0FDL0IsR0FFUixFQW9CSCxDQXJEa0IsR0NFQVIsU0FBU0MsY0FBYyxtQkFFL0JRLGlCQUFpQixRQUFTLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkUHJvamVjdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQnKVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuICAgXG4gICAgY29uc3QgZGlzcGxheUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aXRsZS52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdCgpXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUudmFsdWUpXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICBmb3JtLnJlc2V0KClcbiAgICAgICAgfSlcblxuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGFkZFByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJy5wcm9qZWN0LWRpc3BsYXknKVxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gdGl0bGUudmFsdWVcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVEaXYpXG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlGb3JtXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0IiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9hZGRQcm9qZWN0J1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9uJylcblxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QuZGlzcGxheUZvcm0pIl0sIm5hbWVzIjpbImFkZFByb2plY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwidGl0bGUiLCJhZGRCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJkaXNwbGF5Rm9ybSIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0c0xpc3QiLCJwcm9qZWN0RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicHJvamVjdFRpdGxlRGl2IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5UHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=