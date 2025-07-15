import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("skills", "routes/skills.tsx"),
    route("projects", "routes/projects.tsx"),
    route("experience", "routes/experience.tsx"),
    route("contact", "routes/contact.tsx"),

] satisfies RouteConfig;

