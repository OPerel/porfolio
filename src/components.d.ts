/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Skill } from "./components/sections/app-skills/app-skills";
export namespace Components {
    interface AppAbout {
        "animeClass": string;
        "summary": string;
    }
    interface AppHome {
        "animeClass": string;
    }
    interface AppLoader {
    }
    interface AppNav {
    }
    interface AppPortfolio {
        "animeClass": string;
        "projects": any[];
    }
    interface AppRoot {
    }
    interface AppSkills {
        "animeClass": string;
        "skills": Skill[];
        "work": any[];
    }
    interface ArrowNav {
        "currentPage": number;
    }
    interface ContactFooter {
    }
    interface GrowingTri {
        "color": string;
        "cp": number;
        "growDir": string;
        "on": number;
        "over": number;
        "page": number;
        "under": number;
    }
    interface ParallaxEl {
        "animeClass": string;
        "enterFrom"?: number;
        "on": number;
        "over": number;
        "under": number;
    }
    interface ProjectCard {
        "project": any;
    }
    interface ProjectsGallery {
        "projects": any[];
    }
    interface RotatingTri {
        "animeClass": string;
        "color": string;
        "height": number;
        "on": number;
        "origin": string;
        "over": number;
        "side": string;
        "under": number;
    }
    interface WorkTabs {
        "work": any[];
    }
}
declare global {
    interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {
    }
    var HTMLAppAboutElement: {
        prototype: HTMLAppAboutElement;
        new (): HTMLAppAboutElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppLoaderElement extends Components.AppLoader, HTMLStencilElement {
    }
    var HTMLAppLoaderElement: {
        prototype: HTMLAppLoaderElement;
        new (): HTMLAppLoaderElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppPortfolioElement extends Components.AppPortfolio, HTMLStencilElement {
    }
    var HTMLAppPortfolioElement: {
        prototype: HTMLAppPortfolioElement;
        new (): HTMLAppPortfolioElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSkillsElement extends Components.AppSkills, HTMLStencilElement {
    }
    var HTMLAppSkillsElement: {
        prototype: HTMLAppSkillsElement;
        new (): HTMLAppSkillsElement;
    };
    interface HTMLArrowNavElement extends Components.ArrowNav, HTMLStencilElement {
    }
    var HTMLArrowNavElement: {
        prototype: HTMLArrowNavElement;
        new (): HTMLArrowNavElement;
    };
    interface HTMLContactFooterElement extends Components.ContactFooter, HTMLStencilElement {
    }
    var HTMLContactFooterElement: {
        prototype: HTMLContactFooterElement;
        new (): HTMLContactFooterElement;
    };
    interface HTMLGrowingTriElement extends Components.GrowingTri, HTMLStencilElement {
    }
    var HTMLGrowingTriElement: {
        prototype: HTMLGrowingTriElement;
        new (): HTMLGrowingTriElement;
    };
    interface HTMLParallaxElElement extends Components.ParallaxEl, HTMLStencilElement {
    }
    var HTMLParallaxElElement: {
        prototype: HTMLParallaxElElement;
        new (): HTMLParallaxElElement;
    };
    interface HTMLProjectCardElement extends Components.ProjectCard, HTMLStencilElement {
    }
    var HTMLProjectCardElement: {
        prototype: HTMLProjectCardElement;
        new (): HTMLProjectCardElement;
    };
    interface HTMLProjectsGalleryElement extends Components.ProjectsGallery, HTMLStencilElement {
    }
    var HTMLProjectsGalleryElement: {
        prototype: HTMLProjectsGalleryElement;
        new (): HTMLProjectsGalleryElement;
    };
    interface HTMLRotatingTriElement extends Components.RotatingTri, HTMLStencilElement {
    }
    var HTMLRotatingTriElement: {
        prototype: HTMLRotatingTriElement;
        new (): HTMLRotatingTriElement;
    };
    interface HTMLWorkTabsElement extends Components.WorkTabs, HTMLStencilElement {
    }
    var HTMLWorkTabsElement: {
        prototype: HTMLWorkTabsElement;
        new (): HTMLWorkTabsElement;
    };
    interface HTMLElementTagNameMap {
        "app-about": HTMLAppAboutElement;
        "app-home": HTMLAppHomeElement;
        "app-loader": HTMLAppLoaderElement;
        "app-nav": HTMLAppNavElement;
        "app-portfolio": HTMLAppPortfolioElement;
        "app-root": HTMLAppRootElement;
        "app-skills": HTMLAppSkillsElement;
        "arrow-nav": HTMLArrowNavElement;
        "contact-footer": HTMLContactFooterElement;
        "growing-tri": HTMLGrowingTriElement;
        "parallax-el": HTMLParallaxElElement;
        "project-card": HTMLProjectCardElement;
        "projects-gallery": HTMLProjectsGalleryElement;
        "rotating-tri": HTMLRotatingTriElement;
        "work-tabs": HTMLWorkTabsElement;
    }
}
declare namespace LocalJSX {
    interface AppAbout {
        "animeClass"?: string;
        "summary"?: string;
    }
    interface AppHome {
        "animeClass"?: string;
    }
    interface AppLoader {
    }
    interface AppNav {
        "onNavigate"?: (event: CustomEvent<number>) => void;
    }
    interface AppPortfolio {
        "animeClass"?: string;
        "projects"?: any[];
    }
    interface AppRoot {
    }
    interface AppSkills {
        "animeClass"?: string;
        "skills"?: Skill[];
        "work"?: any[];
    }
    interface ArrowNav {
        "currentPage"?: number;
        "onNavigate"?: (event: CustomEvent<any>) => void;
    }
    interface ContactFooter {
    }
    interface GrowingTri {
        "color"?: string;
        "cp"?: number;
        "growDir"?: string;
        "on"?: number;
        "over"?: number;
        "page"?: number;
        "under"?: number;
    }
    interface ParallaxEl {
        "animeClass"?: string;
        "enterFrom"?: number;
        "on"?: number;
        "over"?: number;
        "under"?: number;
    }
    interface ProjectCard {
        "project"?: any;
    }
    interface ProjectsGallery {
        "projects"?: any[];
    }
    interface RotatingTri {
        "animeClass"?: string;
        "color"?: string;
        "height"?: number;
        "on"?: number;
        "origin"?: string;
        "over"?: number;
        "side"?: string;
        "under"?: number;
    }
    interface WorkTabs {
        "work"?: any[];
    }
    interface IntrinsicElements {
        "app-about": AppAbout;
        "app-home": AppHome;
        "app-loader": AppLoader;
        "app-nav": AppNav;
        "app-portfolio": AppPortfolio;
        "app-root": AppRoot;
        "app-skills": AppSkills;
        "arrow-nav": ArrowNav;
        "contact-footer": ContactFooter;
        "growing-tri": GrowingTri;
        "parallax-el": ParallaxEl;
        "project-card": ProjectCard;
        "projects-gallery": ProjectsGallery;
        "rotating-tri": RotatingTri;
        "work-tabs": WorkTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-about": LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-loader": LocalJSX.AppLoader & JSXBase.HTMLAttributes<HTMLAppLoaderElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-portfolio": LocalJSX.AppPortfolio & JSXBase.HTMLAttributes<HTMLAppPortfolioElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-skills": LocalJSX.AppSkills & JSXBase.HTMLAttributes<HTMLAppSkillsElement>;
            "arrow-nav": LocalJSX.ArrowNav & JSXBase.HTMLAttributes<HTMLArrowNavElement>;
            "contact-footer": LocalJSX.ContactFooter & JSXBase.HTMLAttributes<HTMLContactFooterElement>;
            "growing-tri": LocalJSX.GrowingTri & JSXBase.HTMLAttributes<HTMLGrowingTriElement>;
            "parallax-el": LocalJSX.ParallaxEl & JSXBase.HTMLAttributes<HTMLParallaxElElement>;
            "project-card": LocalJSX.ProjectCard & JSXBase.HTMLAttributes<HTMLProjectCardElement>;
            "projects-gallery": LocalJSX.ProjectsGallery & JSXBase.HTMLAttributes<HTMLProjectsGalleryElement>;
            "rotating-tri": LocalJSX.RotatingTri & JSXBase.HTMLAttributes<HTMLRotatingTriElement>;
            "work-tabs": LocalJSX.WorkTabs & JSXBase.HTMLAttributes<HTMLWorkTabsElement>;
        }
    }
}
