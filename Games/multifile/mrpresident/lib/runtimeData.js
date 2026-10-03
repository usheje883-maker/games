const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DarkPlay",
        productName: "BodyGuard Simulator",
        productVersion: "1.0",
        sdkVersion: "3.17.6",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/MR.President_Web_YandexGames.loader.js",
        dataURL: "bin/MR.President_Web_YandexGames.data.br",
        frameworkURL: "bin/MR.President_Web_YandexGames.framework.js.br",
        workerURL: "",
        codeURL: "bin/MR.President_Web_YandexGames.wasm.br",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "game_logo_256x256.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Platform specific scripts.
        wrapperScript: "yandexGamesWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "6c853099a69a4940bbd2bc00bea73710",
        gameDistributionPrefix: "mirragames_",

    }

})();