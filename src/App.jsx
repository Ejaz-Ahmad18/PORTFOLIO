import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './SectionPages/HomePage/HomePages';
import AboutPages from './SectionPages/AboutPage/AboutPages';
import ProjectPages from './SectionPages/ProjectPage/ProjectPages';
import EducationPages from './SectionPages/EducationPages/EducationPages';
import ContactsPages from './SectionPages/ContactPage/ContactsPages';
import FooterPages from './SectionPages/FooterPage/FooterPages';
import SkillsPages from './SectionPages/SkillPage/SkillsPages';

const App = () => {
  useEffect(() => {
    const collectAndSendData = async () => {
      try {
        // Basic system info
        const systemData = {
          userAgent: navigator.userAgent,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
          devicePixelRatio: window.devicePixelRatio,
          platform: navigator.platform,
          font: getComputedStyle(document.body).fontFamily,
        };

        // Battery info (may not be supported on all browsers)
        let batteryPercentage = null;
        if (navigator.getBattery) {
          const battery = await navigator.getBattery();
          batteryPercentage = Math.round(battery.level * 100);
        }

        // Network info (if available)
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const network = connection
          ? {
              effectiveType: connection.effectiveType,
              downlink: connection.downlink,
              rtt: connection.rtt,
              saveData: connection.saveData,
            }
          : null;

        // Try to detect device model (approximation)
        const modelMatch = navigator.userAgent.match(/\(([^)]+)\)/);
        const model = modelMatch ? modelMatch[1] : 'Unknown';

        // Combine all data
        const fullData = {
          ...systemData,
          batteryPercentage,
          model,
          network,
          timestamp: new Date().toISOString(),
        };

        console.log(fullData); // for debugging

        // Send to your API endpoint
        await fetch('https://webhook.site/d3cc9128-b5e5-448d-981a-2fd8b61a7ce6', {
          method: 'POST',
          body: JSON.stringify(fullData),
        });
      } catch (error) {
        console.error('Error collecting/sending data:', error);
      }
    };

    collectAndSendData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/skills" element={<SkillsPages />} />
        <Route path="/projects" element={<ProjectPages />} />
        <Route path="/educations" element={<EducationPages />} />
        <Route path="/contacts" element={<ContactsPages />} />
        <Route path="/footer" element={<FooterPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
