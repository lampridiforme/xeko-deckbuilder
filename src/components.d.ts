/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
import { CardData } from "./components/info-article/info-definitions";
import { NavInfo } from "./components/journal-navigator/journal-navigator";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface BorderedImage {
    }
    interface InfoArticle {
        "cardData": CardData;
        "imgSrc": string;
    }
    interface InfoImage {
    }
    interface JournalMain {
    }
    interface JournalNavigator {
        "navInfo": Array<NavInfo>;
    }
    interface JournalPage {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBorderedImageElement extends Components.BorderedImage, HTMLStencilElement {
    }
    var HTMLBorderedImageElement: {
        prototype: HTMLBorderedImageElement;
        new (): HTMLBorderedImageElement;
    };
    interface HTMLInfoArticleElement extends Components.InfoArticle, HTMLStencilElement {
    }
    var HTMLInfoArticleElement: {
        prototype: HTMLInfoArticleElement;
        new (): HTMLInfoArticleElement;
    };
    interface HTMLInfoImageElement extends Components.InfoImage, HTMLStencilElement {
    }
    var HTMLInfoImageElement: {
        prototype: HTMLInfoImageElement;
        new (): HTMLInfoImageElement;
    };
    interface HTMLJournalMainElement extends Components.JournalMain, HTMLStencilElement {
    }
    var HTMLJournalMainElement: {
        prototype: HTMLJournalMainElement;
        new (): HTMLJournalMainElement;
    };
    interface HTMLJournalNavigatorElement extends Components.JournalNavigator, HTMLStencilElement {
    }
    var HTMLJournalNavigatorElement: {
        prototype: HTMLJournalNavigatorElement;
        new (): HTMLJournalNavigatorElement;
    };
    interface HTMLJournalPageElement extends Components.JournalPage, HTMLStencilElement {
    }
    var HTMLJournalPageElement: {
        prototype: HTMLJournalPageElement;
        new (): HTMLJournalPageElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "bordered-image": HTMLBorderedImageElement;
        "info-article": HTMLInfoArticleElement;
        "info-image": HTMLInfoImageElement;
        "journal-main": HTMLJournalMainElement;
        "journal-navigator": HTMLJournalNavigatorElement;
        "journal-page": HTMLJournalPageElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface BorderedImage {
    }
    interface InfoArticle {
        "cardData"?: CardData;
        "imgSrc"?: string;
    }
    interface InfoImage {
    }
    interface JournalMain {
    }
    interface JournalNavigator {
        "navInfo"?: Array<NavInfo>;
    }
    interface JournalPage {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "bordered-image": BorderedImage;
        "info-article": InfoArticle;
        "info-image": InfoImage;
        "journal-main": JournalMain;
        "journal-navigator": JournalNavigator;
        "journal-page": JournalPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "bordered-image": LocalJSX.BorderedImage & JSXBase.HTMLAttributes<HTMLBorderedImageElement>;
            "info-article": LocalJSX.InfoArticle & JSXBase.HTMLAttributes<HTMLInfoArticleElement>;
            "info-image": LocalJSX.InfoImage & JSXBase.HTMLAttributes<HTMLInfoImageElement>;
            "journal-main": LocalJSX.JournalMain & JSXBase.HTMLAttributes<HTMLJournalMainElement>;
            "journal-navigator": LocalJSX.JournalNavigator & JSXBase.HTMLAttributes<HTMLJournalNavigatorElement>;
            "journal-page": LocalJSX.JournalPage & JSXBase.HTMLAttributes<HTMLJournalPageElement>;
        }
    }
}
