var browzine = {
  api: "https://api.thirdiron.com/public/v1/libraries/105",
  apiKey: "f735118e-2994-4aad-ba1b-56604b8cdbd2",
  journalBrowZineWebLinkText: "View Journal in BrowZine",
};
 
browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/360-core/browzine-360-core-adapter.js";
document.head.appendChild(browzine.script);
