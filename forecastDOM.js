(()=>{"use strict";(function(){let e=document.getElementById("upper-bar"),t=document.createElement("button");t.classList.add("dailyButton"),t.innerHTML="Daily";let n=document.createElement("button");n.classList.add("hourlyButton"),n.innerHTML="Hourly";let d=document.createElement("div");d.classList.add("arrowContainer");let a=document.createElement("p");a.classList.add("leftArrow");let l=document.createElement("p");l.classList.add("rightArrow"),d.appendChild(a),d.appendChild(l),0==e.childNodes.length?(e.appendChild(t),e.appendChild(n),e.appendChild(d)):(e.replaceChild(t,e.children[0]),e.replaceChild(n,e.children[1]),e.replaceChild(d,e.children[2]))})(),function(){const e=document.getElementById("data-bar");e.addEventListener("wheel",(t=>{t.preventDefault(),e.scrollBy({left:t.deltaY<0?-30:30})}))}(),function(){const e=document.getElementById("data-bar");let t=!1,n=0;e.addEventListener("mousedown",(e=>{t=!0,n=e.pageX})),e.addEventListener("mousemove",(d=>{if(!t)return;d.preventDefault();const a=d.pageX,l=n-a;e.scrollLeft+=l,n=a})),e.addEventListener("mouseup",(e=>{t=!1,n=0}))}(),function(){const e=document.getElementById("data-bar");let t=0,n=0,d=0,a=!1;e.addEventListener("touchstart",(e=>{t=e.touches[0].pageX,n=Date.now(),a=!0,d=0})),e.addEventListener("touchmove",(l=>{if(!a)return;l.preventDefault();const r=l.touches[0].pageX,o=t-r;e.scrollLeft+=o,t=r;const c=Date.now();d=o/(c-n),n=c})),e.addEventListener("touchend",(()=>{a=!1,function t(){Math.abs(d)>.01&&(e.scrollLeft+=d,d*=.95,requestAnimationFrame(t))}()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZWNhc3RET00uanMiLCJtYXBwaW5ncyI6Im9CQUFBLFdBQ0UsSUFBSUEsRUFBa0JDLFNBQVNDLGVBQWUsYUFFMUNDLEVBQWNGLFNBQVNHLGNBQWMsVUFDekNELEVBQVlFLFVBQVVDLElBQUksZUFDMUJILEVBQVlJLFVBQVksUUFFeEIsSUFBSUMsRUFBZVAsU0FBU0csY0FBYyxVQUMxQ0ksRUFBYUgsVUFBVUMsSUFBSSxnQkFDM0JFLEVBQWFELFVBQVksU0FFekIsSUFBSUUsRUFBaUJSLFNBQVNHLGNBQWMsT0FDNUNLLEVBQWVKLFVBQVVDLElBQUksa0JBRTdCLElBQUlJLEVBQVlULFNBQVNHLGNBQWMsS0FDdkNNLEVBQVVMLFVBQVVDLElBQUksYUFFeEIsSUFBSUssRUFBYVYsU0FBU0csY0FBYyxLQUN4Q08sRUFBV04sVUFBVUMsSUFBSSxjQUV6QkcsRUFBZUcsWUFBWUYsR0FDM0JELEVBQWVHLFlBQVlELEdBRWMsR0FBckNYLEVBQWdCYSxXQUFXQyxRQUM3QmQsRUFBZ0JZLFlBQVlULEdBQzVCSCxFQUFnQlksWUFBWUosR0FDNUJSLEVBQWdCWSxZQUFZSCxLQUU1QlQsRUFBZ0JlLGFBQWFaLEVBQWFILEVBQWdCZ0IsU0FBUyxJQUNuRWhCLEVBQWdCZSxhQUFhUCxFQUFjUixFQUFnQmdCLFNBQVMsSUFDcEVoQixFQUFnQmUsYUFBYU4sRUFBZ0JULEVBQWdCZ0IsU0FBUyxJQUUxRSxFQUNBQyxHQWdGQSxXQUNFLE1BQU1DLEVBQWtCakIsU0FBU0MsZUFBZSxZQUVoRGdCLEVBQWdCQyxpQkFBaUIsU0FBVUMsSUFDekNBLEVBQU1DLGlCQUNOSCxFQUFnQkksU0FBUyxDQUN2QkMsS0FBTUgsRUFBTUksT0FBUyxHQUFLLEdBQUssSUFDL0IsR0FFTixDQUNBQyxHQWtFQSxXQUNFLE1BQU1DLEVBQW1CekIsU0FBU0MsZUFBZSxZQUNqRCxJQUFJeUIsR0FBYyxFQUNkQyxFQUFTLEVBRWJGLEVBQWlCUCxpQkFBaUIsYUFBY1UsSUFDOUNGLEdBQWMsRUFDZEMsRUFBU0MsRUFBRUMsS0FBSyxJQUdsQkosRUFBaUJQLGlCQUFpQixhQUFjVSxJQUM5QyxJQUFLRixFQUNILE9BRUZFLEVBQUVSLGlCQUNGLE1BQU1VLEVBQVdGLEVBQUVDLE1BQ2JFLEVBQVdKLEVBQVNHLEVBQzFCTCxFQUFpQk8sWUFBY0QsRUFDL0JKLEVBQVNHLENBQVEsSUFHbkJMLEVBQWlCUCxpQkFBaUIsV0FBWVUsSUFDNUNGLEdBQWMsRUFDZEMsRUFBUyxDQUFDLEdBRWQsQ0FDQU0sR0FDQSxXQUNFLE1BQU1SLEVBQW1CekIsU0FBU0MsZUFBZSxZQUNqRCxJQUFJMEIsRUFBUyxFQUNUTyxFQUFZLEVBQ1pDLEVBQVcsRUFDWEMsR0FBWSxFQUVoQlgsRUFBaUJQLGlCQUFpQixjQUFlVSxJQUMvQ0QsRUFBU0MsRUFBRVMsUUFBUSxHQUFHUixNQUN0QkssRUFBWUksS0FBS0MsTUFDakJILEdBQVksRUFDWkQsRUFBVyxDQUFDLElBR2RWLEVBQWlCUCxpQkFBaUIsYUFBY1UsSUFDOUMsSUFBS1EsRUFDSCxPQUdGUixFQUFFUixpQkFDRixNQUFNVSxFQUFXRixFQUFFUyxRQUFRLEdBQUdSLE1BQ3hCRSxFQUFXSixFQUFTRyxFQUMxQkwsRUFBaUJPLFlBQWNELEVBQy9CSixFQUFTRyxFQUVULE1BQU1VLEVBQWNGLEtBQUtDLE1BRXpCSixFQUFXSixHQURNUyxFQUFjTixHQUUvQkEsRUFBWU0sQ0FBVyxJQUd6QmYsRUFBaUJQLGlCQUFpQixZQUFZLEtBQzVDa0IsR0FBWSxFQUdaLFNBQVNLLElBQ0hDLEtBQUtDLElBQUlSLEdBQVksTUFDdkJWLEVBQWlCTyxZQUFjRyxFQUMvQkEsR0FMaUIsSUFNakJTLHNCQUFzQkgsR0FFMUIsQ0FFQUEsRUFBZSxHQUVuQixDQUNBSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9yZWNhc3RET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnV0dG9ucygpIHtcbiAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBwZXItYmFyXCIpO1xuXG4gIGxldCBkYWlseUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRhaWx5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkYWlseUJ1dHRvblwiKTtcbiAgZGFpbHlCdXR0b24uaW5uZXJIVE1MID0gXCJEYWlseVwiO1xuXG4gIGxldCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob3VybHlCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvdXJseUJ1dHRvblwiKTtcbiAgaG91cmx5QnV0dG9uLmlubmVySFRNTCA9IFwiSG91cmx5XCI7XG5cbiAgbGV0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93Q29udGFpbmVyXCIpO1xuXG4gIGxldCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJsZWZ0QXJyb3dcIik7XG5cbiAgbGV0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwicmlnaHRBcnJvd1wiKTtcblxuICBhcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xuICBhcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcblxuICBpZiAoYnV0dG9uQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09IDApIHtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd0NvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uQ29udGFpbmVyLnJlcGxhY2VDaGlsZChkYWlseUJ1dHRvbiwgYnV0dG9uQ29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICBidXR0b25Db250YWluZXIucmVwbGFjZUNoaWxkKGhvdXJseUJ1dHRvbiwgYnV0dG9uQ29udGFpbmVyLmNoaWxkcmVuWzFdKTtcbiAgICBidXR0b25Db250YWluZXIucmVwbGFjZUNoaWxkKGFycm93Q29udGFpbmVyLCBidXR0b25Db250YWluZXIuY2hpbGRyZW5bMl0pO1xuICB9XG59XG5idXR0b25zKCk7XG5cbmZ1bmN0aW9uIGRhaWx5KGRhdGUsIGNvbmRpdGlvbl9pY29uLCB0ZW1wLCBjb25kaXRpb25UZXh0KSB7XG4gIGxldCBkYWlseURhdGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGEtYmFyXCIpO1xuXG4gIGxldCBkYWlseURhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGFpbHlEYXRlSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJkYWlseURhdGVIb2xkZXJcIik7XG4gIGxldCBjdXRZZWFyID0gZGF0ZS5zcGxpdChcIi1cIikuc2xpY2UoMSwgMyk7XG4gIGxldCByZXN1bHQgPSBjdXRZZWFyLmpvaW4oXCIvXCIpO1xuICBpZiAocmVzdWx0LnNwbGl0KFwiXCIpWzZdID09IDApIHtcbiAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQoXCJcIik7XG4gICAgbGV0IHRlbXAgPSByZXN1bHQuc3BsaWNlKDYsIDEpO1xuICAgIHJlc3VsdCA9IHJlc3VsdC5qb2luKFwiXCIpO1xuICB9XG4gIGlmIChyZXN1bHQpIGRhaWx5RGF0ZUhvbGRlci5pbm5lckhUTUwgPSByZXN1bHQ7XG5cbiAgbGV0IGRhaWx5Q29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRhaWx5Q29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGFpbHlDb25kaXRpb25JY29uXCIpO1xuICBkYWlseUNvbmRpdGlvbkljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvbmRpdGlvbl9pY29uKTtcbiAgZGFpbHlDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIldlYXRoZXIgQ29uZGl0aW9uIEljb25cIik7XG5cbiAgbGV0IGRhaWx5Q29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYWlseUNvbmRpdGlvblRleHQuY2xhc3NMaXN0LmFkZChcImRhaWx5Q29uZGl0aW9uVGV4dFwiKTtcbiAgZGFpbHlDb25kaXRpb25UZXh0LmlubmVySFRNTCA9IGNvbmRpdGlvblRleHQ7XG5cbiAgbGV0IGRhaWx5VGVtcGVyYXR1cmVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGRhaWx5VGVtcGVyYXR1cmVIb2xkZXIuY2xhc3NMaXN0LmFkZChcImRhaWx5VGVtcGVyYXR1cmVIb2xkZXJcIik7XG4gIGxldCBtb3JlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtb3JlVGV4dC5jbGFzc0xpc3QuYWRkKFwibW9yZVRleHRcIik7XG4gIG1vcmVUZXh0LmlubmVySFRNTCA9IFwiQXZnIHRlbXA6IFwiICsgXCI8YnI+XCI7XG4gIGRhaWx5VGVtcGVyYXR1cmVIb2xkZXIuaW5uZXJIVE1MID0gdGVtcCArIFwiIMKwQ1wiO1xuXG4gIGxldCBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhaWx5Q29udGFpbmVyXCIpO1xuICBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlDb25kaXRpb25JY29uKTtcbiAgQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhaWx5Q29uZGl0aW9uVGV4dCk7XG4gIENvbnRhaW5lci5hcHBlbmRDaGlsZChkYWlseURhdGVIb2xkZXIpO1xuICBDb250YWluZXIuYXBwZW5kQ2hpbGQobW9yZVRleHQpO1xuICBDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlUZW1wZXJhdHVyZUhvbGRlcik7XG5cbiAgZGFpbHlEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGhvdXJseShkYXRlLCBjb25kaXRpb25faWNvbiwgdGVtcCwgY29uZGl0aW9uVGV4dCkge1xuICBsZXQgaG91cmx5RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YS1iYXJcIik7XG5cbiAgbGV0IGhvdXJseURhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG91cmx5RGF0ZUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5RGF0ZUhvbGRlclwiKTtcbiAgbGV0IGN1dFllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKS5zbGljZSgxLCAzKTtcbiAgbGV0IHJlc3VsdCA9IGN1dFllYXIuam9pbihcIi9cIik7XG4gIGlmIChyZXN1bHQuc3BsaXQoXCJcIilbNl0gPT0gMCkge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdChcIlwiKTtcbiAgICBsZXQgdGVtcCA9IHJlc3VsdC5zcGxpY2UoNiwgMSk7XG4gICAgcmVzdWx0ID0gcmVzdWx0LmpvaW4oXCJcIik7XG4gIH1cbiAgaWYgKHJlc3VsdCkgaG91cmx5RGF0ZUhvbGRlci5pbm5lckhUTUwgPSByZXN1bHQ7XG5cbiAgbGV0IGhvdXJseUNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBob3VybHlDb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlDb25kaXRpb25JY29uXCIpO1xuICBob3VybHlDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBjb25kaXRpb25faWNvbik7XG4gIGhvdXJseUNvbmRpdGlvbkljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiV2VhdGhlciBDb25kaXRpb24gSWNvblwiKTtcblxuICBsZXQgaG91cmx5Q29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob3VybHlDb25kaXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJob3VybHlDb25kaXRpb25UZXh0XCIpO1xuICBob3VybHlDb25kaXRpb25UZXh0LmlubmVySFRNTCA9IGNvbmRpdGlvblRleHQ7XG5cbiAgbGV0IGhvdXJseVRlbXBlcmF0dXJlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBob3VybHlUZW1wZXJhdHVyZUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5VGVtcGVyYXR1cmVIb2xkZXJcIik7XG4gIGhvdXJseVRlbXBlcmF0dXJlSG9sZGVyLmlubmVySFRNTCA9IHRlbXAgKyBcIiDCsENcIjtcblxuICBsZXQgQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob3VybHlDb250YWluZXJcIik7XG4gIENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlDb25kaXRpb25JY29uKTtcbiAgQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseUNvbmRpdGlvblRleHQpO1xuICBDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5RGF0ZUhvbGRlcik7XG4gIENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZUhvbGRlcik7XG5cbiAgaG91cmx5RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkYXRhQmFyU2Nyb2xsKCkge1xuICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGEtYmFyXCIpO1xuXG4gIHNjcm9sbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsQnkoe1xuICAgICAgbGVmdDogZXZlbnQuZGVsdGFZIDwgMCA/IC0zMCA6IDMwLFxuICAgIH0pO1xuICB9KTtcbn1cbmRhdGFCYXJTY3JvbGwoKTtcblxuZnVuY3Rpb24gZGFpbHlDb252ZXJ0ZXJGKGRhaWx5Rm9yZWNhc3QpIHtcbiAgY29uc3QgdGVtcGVyYXR1cmVUb0YgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwiZGFpbHlUZW1wZXJhdHVyZUhvbGRlclwiXG4gICk7XG4gIGlmICh0ZW1wZXJhdHVyZVRvRlswXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZGFpbHlGb3JlY2FzdCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0ZW1wZXJhdHVyZU5vdyA9IGRhaWx5Rm9yZWNhc3RbXCJkYXlcIiArIGldLmF2Z190ZW1wRjtcbiAgICAgIHRlbXBlcmF0dXJlVG9GW2ldLmlubmVySFRNTCA9IHRlbXBlcmF0dXJlTm93ICsgXCIgwrBGXCI7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBkYWlseUNvbnZlcnRlckMoZGFpbHlGb3JlY2FzdCkge1xuICBjb25zdCB0ZW1wZXJhdHVyZVRvQyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJkYWlseVRlbXBlcmF0dXJlSG9sZGVyXCJcbiAgKTtcbiAgaWYgKHRlbXBlcmF0dXJlVG9DWzBdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhkYWlseUZvcmVjYXN0KS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRlbXBlcmF0dXJlTm93ID0gZGFpbHlGb3JlY2FzdFtcImRheVwiICsgaV0uYXZnX3RlbXBDO1xuICAgICAgdGVtcGVyYXR1cmVUb0NbaV0uaW5uZXJIVE1MID0gdGVtcGVyYXR1cmVOb3cgKyBcIiDCsENcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG91cmx5Q29udmVydGVyRihob3VybHlGb3JlY2FzdCkge1xuICBjb25zdCB0ZW1wZXJhdHVyZVRvRkhvdXJseSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJob3VybHlUZW1wZXJhdHVyZUhvbGRlclwiXG4gICk7XG4gIGlmICh0ZW1wZXJhdHVyZVRvRkhvdXJseVswXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoaG91cmx5Rm9yZWNhc3QpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDI0OyBrKyspIHtcbiAgICAgICAgbGV0IHRlbXBlcmF0dXJlID1cbiAgICAgICAgICBob3VybHlGb3JlY2FzdFtcImRheVwiICsgaV0uaG91cltcImhvdXJcIiArIGtdLnRlbXBlcmF0dXJlRjtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIHRlbXBlcmF0dXJlVG9GSG91cmx5W2tdLmlubmVySFRNTCA9IHRlbXBlcmF0dXJlICsgXCIgwrBGXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgdGVtcGVyYXR1cmVUb0ZIb3VybHlbMjQgKyBrXS5pbm5lckhUTUwgPSB0ZW1wZXJhdHVyZSArIFwiIMKwRlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBlcmF0dXJlVG9GSG91cmx5WzQ4ICsga10uaW5uZXJIVE1MID0gdGVtcGVyYXR1cmUgKyBcIiDCsEZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBob3VybHlDb252ZXJ0ZXJDKGhvdXJseUZvcmVjYXN0KSB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVG9DSG91cmx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcImhvdXJseVRlbXBlcmF0dXJlSG9sZGVyXCJcbiAgKTtcbiAgaWYgKHRlbXBlcmF0dXJlVG9DSG91cmx5WzBdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhob3VybHlGb3JlY2FzdCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjQ7IGsrKykge1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmUgPVxuICAgICAgICAgIGhvdXJseUZvcmVjYXN0W1wiZGF5XCIgKyBpXS5ob3VyW1wiaG91clwiICsga10udGVtcGVyYXR1cmVDO1xuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgdGVtcGVyYXR1cmVUb0NIb3VybHlba10uaW5uZXJIVE1MID0gdGVtcGVyYXR1cmUgKyBcIiDCsENcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpID09IDEpIHtcbiAgICAgICAgICB0ZW1wZXJhdHVyZVRvQ0hvdXJseVsyNCArIGtdLmlubmVySFRNTCA9IHRlbXBlcmF0dXJlICsgXCIgwrBDXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGVyYXR1cmVUb0NIb3VybHlbNDggKyBrXS5pbm5lckhUTUwgPSB0ZW1wZXJhdHVyZSArIFwiIMKwQ1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBkYXRhQmFyU2xpZGVyKCkge1xuICBjb25zdCBzbGlkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWJhclwiKTtcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBzdGFydFggPSAwO1xuXG4gIHNsaWRpbmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBzdGFydFggPSBlLnBhZ2VYO1xuICB9KTtcblxuICBzbGlkaW5nQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICBpZiAoIWlzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjdXJyZW50WCA9IGUucGFnZVg7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBzdGFydFggLSBjdXJyZW50WDtcbiAgICBzbGlkaW5nQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZGlzdGFuY2U7XG4gICAgc3RhcnRYID0gY3VycmVudFg7XG4gIH0pO1xuXG4gIHNsaWRpbmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICBpc01vdXNlRG93biA9IGZhbHNlO1xuICAgIHN0YXJ0WCA9IDA7XG4gIH0pO1xufVxuZGF0YUJhclNsaWRlcigpO1xuZnVuY3Rpb24gcGhvbmVTbGlkZXIoKSB7XG4gIGNvbnN0IHNsaWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGEtYmFyXCIpO1xuICBsZXQgc3RhcnRYID0gMDtcbiAgbGV0IHN0YXJ0VGltZSA9IDA7XG4gIGxldCB2ZWxvY2l0eSA9IDA7XG4gIGxldCBpc1RvdWNoZWQgPSBmYWxzZTtcblxuICBzbGlkaW5nQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XG4gICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICB2ZWxvY2l0eSA9IDA7XG4gIH0pO1xuXG4gIHNsaWRpbmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4ge1xuICAgIGlmICghaXNUb3VjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gc3RhcnRYIC0gY3VycmVudFg7XG4gICAgc2xpZGluZ0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGRpc3RhbmNlO1xuICAgIHN0YXJ0WCA9IGN1cnJlbnRYO1xuXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgdmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWVEaWZmO1xuICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9KTtcblxuICBzbGlkaW5nQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgZGVjZWxlcmF0aW9uID0gMC45NTtcblxuICAgIGZ1bmN0aW9uIGluZXJ0aWFTY3JvbGwoKSB7XG4gICAgICBpZiAoTWF0aC5hYnModmVsb2NpdHkpID4gMC4wMSkge1xuICAgICAgICBzbGlkaW5nQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gdmVsb2NpdHk7XG4gICAgICAgIHZlbG9jaXR5ICo9IGRlY2VsZXJhdGlvbjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluZXJ0aWFTY3JvbGwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZXJ0aWFTY3JvbGwoKTtcbiAgfSk7XG59XG5waG9uZVNsaWRlcigpO1xuXG5mdW5jdGlvbiBhcnJvd3NGdW5jdGlvbmFsaXR5KCkge1xuICBjb25zdCBzbGlkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWJhclwiKTtcbiAgY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsZWZ0QXJyb3dcIilbMF07XG4gIGNvbnN0IHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpZ2h0QXJyb3dcIilbMF07XG4gIGNvbnN0IGVsZW1lbnRXaWR0aCA9XG4gICAgc2xpZGluZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5Q29udGFpbmVyXCIpLm9mZnNldFdpZHRoO1xuICBjb25zb2xlLmxvZyhlbGVtZW50V2lkdGgpO1xuICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2xpZGluZ0NvbnRhaW5lci5zY3JvbGxMZWZ0IC09IDMgKiBlbGVtZW50V2lkdGg7XG4gIH0pO1xuXG4gIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2xpZGluZ0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IDMgKiBlbGVtZW50V2lkdGg7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBkYWlseSxcbiAgaG91cmx5LFxuICBkYWlseUNvbnZlcnRlckYsXG4gIGRhaWx5Q29udmVydGVyQyxcbiAgaG91cmx5Q29udmVydGVyRixcbiAgaG91cmx5Q29udmVydGVyQyxcbiAgYXJyb3dzRnVuY3Rpb25hbGl0eSxcbn07XG4iXSwibmFtZXMiOlsiYnV0dG9uQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhaWx5QnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImhvdXJseUJ1dHRvbiIsImFycm93Q29udGFpbmVyIiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsImFwcGVuZENoaWxkIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlcGxhY2VDaGlsZCIsImNoaWxkcmVuIiwiYnV0dG9ucyIsInNjcm9sbENvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsQnkiLCJsZWZ0IiwiZGVsdGFZIiwiZGF0YUJhclNjcm9sbCIsInNsaWRpbmdDb250YWluZXIiLCJpc01vdXNlRG93biIsInN0YXJ0WCIsImUiLCJwYWdlWCIsImN1cnJlbnRYIiwiZGlzdGFuY2UiLCJzY3JvbGxMZWZ0IiwiZGF0YUJhclNsaWRlciIsInN0YXJ0VGltZSIsInZlbG9jaXR5IiwiaXNUb3VjaGVkIiwidG91Y2hlcyIsIkRhdGUiLCJub3ciLCJjdXJyZW50VGltZSIsImluZXJ0aWFTY3JvbGwiLCJNYXRoIiwiYWJzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGhvbmVTbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9