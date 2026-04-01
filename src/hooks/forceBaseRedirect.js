// Redireciona para a base '/' ao dar refresh em qualquer rota
export function forceBaseRedirect() {
  if (window.location.pathname !== '/' || window.location.hash) {
    window.location.replace('/');
  } else {
    window.scrollTo(0, 0);
  }
}
