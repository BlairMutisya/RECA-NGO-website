/**
 * Format a number with commas
 * @param {number} n
 * @returns {string}
 */
export function formatNumber(n) {
  return new Intl.NumberFormat().format(n)
}

/**
 * Truncate a string to a max length
 * @param {string} str
 * @param {number} max
 * @returns {string}
 */
export function truncate(str, max = 120) {
  if (str.length <= max) return str
  return str.slice(0, max).trimEnd() + '…'
}

/**
 * Scroll smoothly to a DOM element by id
 * @param {string} id
 * @param {number} offset
 */
export function scrollToId(id, offset = 100) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * Simple debounce
 */
export function debounce(fn, delay = 200) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
