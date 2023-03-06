export default function hasScrolledToBottom() {
  return (
    window.innerHeight + document.documentElement.scrollTop + 10 >=
    document.documentElement.offsetHeight
  );
}
