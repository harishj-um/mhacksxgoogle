global.voiceAccent = 'en-US-AvaMultilingualNeural';

function setVoiceAccent(accent) {
    switch (accent) {
        case 'Aus Male':
            global.voiceAccent = 'en-AU-WilliamNeural';
            break;
        case 'Aus Femiale':
            global.voiceAccent = 'en-AU-NatashaNeural';
            break;
        case 'CAD Male':
            global.voiceAccent = 'en-CA-LiamNeural';
            break;
        case 'CAD Female':
            global.voiceAccent = 'en-CA-ClaraNeural';
            break;
        case 'sAf Male':
            global.voiceAccent = 'en-ZA-LukeNeural';
            break;
        case 'sAf Female':
            global.voiceAccent = 'en-ZA-LeahNeural';
            break;
        default:
            global.voiceAccent = 'en-US-AvaMultilingualNeural';
    }
}

module.exports = setVoiceAccent;
