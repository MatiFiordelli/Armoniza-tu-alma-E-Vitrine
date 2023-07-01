export interface PropsTransitionEnd {
    $transitionEnd: boolean;
}

export interface PropsUrl {
    $url: string;
}

export interface PropsTransitionStart {
    $transitionStart: boolean;
}

export interface PropsForItemImageComponent extends PropsTransitionStart {
    $x: string;
    $y: string;
    $w: string;
    $h: string;
    $itemIndex: number;
    $arrayImages: string[];
}

export interface PropsForItemTextDescriptionComponent {
    $animateActivation: boolean;
    $opacity: string;
}

