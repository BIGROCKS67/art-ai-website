import { Navigate } from 'react-router-dom'

/** Insights not published yet — send visitors to Our Story. */
export default function BlogPage() {
  return <Navigate to="/our-story" replace />
}
