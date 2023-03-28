import React, { useState, useEffect } from "react";

import { Pushwoosh } from "web-push-notifications";
import UI from "@component/gip-ui";

const pwInstance = new Pushwoosh();

export default function name(params) {
  useEffect(() => {
    pwInstance.push([
      "init",
      {
        logLevel: "info", // possible values: error, info, debug
        applicationCode: "XXXXX-XXXXX", // you application code from Pushwoosh Control Panel
        safariWebsitePushID: "web.com.example.domain", //  unique reverse-domain string, obtained in you Apple Developer Portal. Only needed if you send push notifications to Safari browser
        defaultNotificationTitle: "Pushwoosh", // sets a default title for push notifications
        defaultNotificationImage: "https://yoursite.com/img/logo-medium.png", // URL to custom custom notification image
        autoSubscribe: false, // or true. If true, prompts a user to subscribe for pushes upon SDK initialization
        subscribeWidget: {
          enable: true,
        },
        userId: "user_id", // optional, set custom user ID
        tags: {
          Name: "John Smith", // optional, set custom Tags
        },
      },
    ]);

    pwInstance.push(function (api) {
      console.log("Pushwoosh ready");
    });
  }, []);
  return <UI.Stack>dssd</UI.Stack>;
}
