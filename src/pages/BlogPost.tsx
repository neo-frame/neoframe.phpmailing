import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const blogPosts = {
  'webdesign-2025': {
    title: 'Webdesign 2025: Wie sieht eine erfolgreiche Website aus?',
    category: 'Webdesign',
    author: 'Michael Schmidt',
    date: '2024-03-20',
    readTime: '8 min',
    content: `
      <p class="lead">
        Ihre Website ist oft das erste, was potenzielle Kunden von Ihnen sehen – und der erste Eindruck zählt. Gutes Webdesign ist deshalb wichtiger denn je. Hier erfahren Sie, worauf es ankommt.
      </p>

      <h2>1. Nutzer im Fokus</h2>
      <p>
        Eine erfolgreiche Website ist nicht nur schön, sondern vor allem praktisch und leicht zu bedienen. Niemand bleibt gerne auf einer Seite, die unübersichtlich oder schwer zu navigieren ist. Deshalb:
      </p>
      <ul>
        <li>Einfache Struktur: Besucher sollten sofort finden, was sie suchen.</li>
        <li>Klares Design: Weniger Schnickschnack, mehr Fokus auf Inhalte und Nutzerfreundlichkeit.</li>
        <li>Barrierefreiheit: Ihre Website sollte für alle zugänglich sein – mit gut lesbaren Texten, kontrastreichen Farben und verständlichen Inhalten.</li>
      </ul>

      <h2>2. Geschwindigkeit zählt</h2>
      <p>
        2025 haben wir alle keine Zeit zu verlieren – und das gilt auch für Websites. Wenn Ihre Seite zu langsam lädt, sind Besucher schnell wieder weg.
      </p>
      <ul>
        <li>Schnelle Ladezeiten: Optimieren Sie Bilder und Videos, um die Geschwindigkeit zu verbessern.</li>
        <li>Effizienter Code: Halten Sie Ihre Website technisch schlank und modern.</li>
        <li>Gutes Hosting: Ein schneller Server ist die Basis für eine performante Website.</li>
      </ul>

      <h2>3. Mobile Nutzung – Standard, kein Extra</h2>
      <p>
        Die meisten Menschen surfen heute auf ihrem Smartphone. Deshalb muss Ihre Website auch auf kleinen Bildschirmen perfekt aussehen und funktionieren.
      </p>
      <ul>
        <li>Responsives Design: Ihre Seite passt sich automatisch an jede Bildschirmgröße an.</li>
        <li>Gut lesbare Inhalte: Kurz und knackig ist mobil besonders wichtig.</li>
        <li>Schnelligkeit: Auch auf mobilen Geräten sollte die Ladezeit unter drei Sekunden liegen.</li>
      </ul>

      <h2>4. Bilder und Videos mit Wirkung</h2>
      <p>
        Visuelle Elemente sind ein Muss – sie machen Ihre Website lebendig und wecken Interesse. Aber weniger ist oft mehr.
      </p>
      <ul>
        <li>Qualität vor Quantität: Nutzen Sie professionelle Bilder und Videos, die Ihre Botschaft unterstützen.</li>
        <li>Animationen: Dezente Effekte, die Inhalte einblenden oder bewegen, sorgen für Dynamik.</li>
        <li>Interaktive Features: Tools wie Formulare oder Rechner können Besucher begeistern und einbinden.</li>
      </ul>

      <h2>5. Inhalte, die ankommen</h2>
      <p>
        Die beste Website nützt nichts, wenn die Inhalte nicht überzeugen. Texte, Bilder und Videos müssen gezielt auf Ihre Zielgruppe ausgerichtet sein.
      </p>
      <ul>
        <li>Informativ und klar: Schreiben Sie Texte, die Fragen beantworten und Probleme lösen.</li>
        <li>Vielfalt: Nutzen Sie unterschiedliche Formate, um Inhalte spannend zu präsentieren.</li>
        <li>Aktualität: Halten Sie Ihre Inhalte frisch – veraltete Infos wirken unprofessionell.</li>
      </ul>

      <h2>6. Sicherheit ist ein Muss</h2>
      <p>
        In einer Zeit, in der Datenschutz immer wichtiger wird, sollten Sie zeigen, dass Ihre Website sicher ist.
      </p>
      <ul>
        <li>SSL-Verschlüsselung: HTTPS ist Standard – und wird von Besuchern und Suchmaschinen erwartet.</li>
        <li>Datenschutzklarheit: Kommunizieren Sie offen, wie Sie mit Daten umgehen.</li>
        <li>Zuverlässige Technik: Besonders für Shops sind sichere Bezahlmethoden und ein stabiler Betrieb unerlässlich.</li>
      </ul>

      <h2>7. Webdesign-Trends 2025</h2>
      <p>
        Trends kommen und gehen, aber einige Entwicklungen prägen das Webdesign nachhaltig:
      </p>
      <ul>
        <li>Dark Mode: Viele Nutzer bevorzugen dunkle Designs, besonders abends oder bei längerer Nutzung.</li>
        <li>Minimalismus: Weniger Ablenkung, mehr Fokus auf das Wesentliche.</li>
        <li>Personalisierung: Inhalte, die individuell auf die Besucher zugeschnitten sind, machen den Unterschied.</li>
      </ul>

      <h2>Was macht Ihre Website besonders?</h2>
      <p>
        Eine moderne Website ist mehr als nur eine digitale Visitenkarte. Sie ist Ihre Bühne, Ihr Schaufenster und Ihr wichtigster Verkäufer – rund um die Uhr. Gutes Webdesign bringt nicht nur Ihre Marke zur Geltung, sondern sorgt dafür, dass Ihre Besucher bleiben, sich wohlfühlen und gerne zurückkommen.
      </p>
      <p>
        Sie wollen eine Website, die all das bietet? neoframe.ch unterstützt Sie dabei, eine moderne, benutzerfreundliche und wirkungsvolle Website zu gestalten. Schreiben Sie uns – wir machen Ihre Ideen digital sichtbar!
      </p>
    `
  },
  'seo-2025': {
    title: 'SEO 2025: Wie Sie Ihre Website nach vorne bringen',
    category: 'SEO',
    author: 'Sarah Weber',
    date: '2024-03-18',
    readTime: '10 min',
    content: `
      <p class="lead">
        SEO verändert sich ständig, und was vor ein paar Jahren funktioniert hat, reicht heute oft nicht mehr aus. 2025 geht es mehr denn je darum, die Suchmaschinenoptimierung an die Bedürfnisse der Nutzer anzupassen – und gleichzeitig mit den neuesten Technologien Schritt zu halten.
      </p>

      <h2>SEO mit KI: Die Zukunft ist jetzt</h2>
      <p>
        Künstliche Intelligenz spielt eine immer größere Rolle in der Suchmaschinenwelt. Google analysiert Inhalte heute nicht nur nach Keywords, sondern versteht auch Zusammenhänge, Bilder und sogar Videos. Das bedeutet für Sie:
      </p>
      <ul>
        <li>Kombinieren Sie verschiedene Inhalte wie Texte, Bilder und Videos.</li>
        <li>Schreiben Sie in einer Sprache, die Menschen anspricht – nicht nur die Suchmaschine.</li>
        <li>Nutzen Sie längere, spezifische Keywords (sogenannte Longtail-Keywords), die echte Fragen Ihrer Zielgruppe beantworten.</li>
      </ul>

      <h2>Inhalte, die Menschen vertrauen</h2>
      <p>
        Google achtet verstärkt darauf, ob Ihre Website vertrauenswürdig und kompetent wirkt. Dieser Fokus auf Qualität spiegelt sich im sogenannten E-E-A-T-Prinzip wider (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit).
      </p>
      <ul>
        <li>Schaffen Sie Inhalte, die echte Probleme lösen und hilfreich sind.</li>
        <li>Arbeiten Sie an Ihrer Online-Reputation, etwa durch gute Kundenbewertungen und Backlinks von seriösen Seiten.</li>
        <li>Geben Sie an, wer hinter Ihrer Website steht – mit klaren Angaben zu Ihrem Team oder Unternehmen.</li>
      </ul>

      <h2>Mobilfreundlichkeit bleibt ein Muss</h2>
      <p>
        Wenn Ihre Website nicht auf dem Smartphone funktioniert, verlieren Sie Besucher. Punkt. Die Mehrheit der Menschen sucht über mobile Geräte – und das berücksichtigt auch Google.
      </p>
      <ul>
        <li>Sorgen Sie dafür, dass Ihre Seite schnell lädt (unter zwei Sekunden).</li>
        <li>Verwenden Sie ein Design, das sich automatisch an jede Bildschirmgröße anpasst.</li>
        <li>Halten Sie Texte kurz und klar – besonders auf mobilen Geräten.</li>
      </ul>

      <h2>Sprachsuche verändert die Regeln</h2>
      <p>
        „Hey Google, wo finde ich eine Webdesign-Agentur in Zürich?" – Sprachsuche wird immer beliebter. 2025 sollten Sie darauf vorbereitet sein:
      </p>
      <ul>
        <li>Schreiben Sie Inhalte, die wie natürliche Antworten klingen.</li>
        <li>Stellen Sie häufige Fragen auf Ihrer Website – und beantworten Sie diese präzise.</li>
        <li>Denken Sie lokal: Viele Sprachsuchen beziehen sich auf die Umgebung.</li>
      </ul>

      <h2>Technik, die Nutzer begeistert</h2>
      <p>
        SEO ist nicht nur Inhalt – die Technik dahinter spielt eine genauso große Rolle. Google misst, wie schnell Ihre Seite lädt, wie stabil das Layout ist und wie gut sie auf Nutzeranfragen reagiert.
      </p>
      <ul>
        <li>Optimieren Sie Bilder und Videos, damit sie nicht zu viel Ladezeit beanspruchen.</li>
        <li>Achten Sie darauf, dass Ihre Seite beim Scrollen stabil bleibt und nichts „springt".</li>
        <li>Testen Sie regelmäßig die Benutzerfreundlichkeit Ihrer Website.</li>
      </ul>

      <h2>Lokale SEO für KMU und Startups</h2>
      <p>
        Wenn Sie ein kleines Unternehmen oder Startup sind, ist lokale SEO besonders wichtig. Viele Menschen suchen direkt in ihrer Region nach Dienstleistungen.
      </p>
      <ul>
        <li>Pflegen Sie Ihr Google My Business Profil – mit aktuellen Öffnungszeiten, Bildern und Kontaktinformationen.</li>
        <li>Arbeiten Sie mit lokalen Keywords wie „Webdesign Zürich" oder „SEO-Agentur Schweiz".</li>
        <li>Bitten Sie zufriedene Kunden um Bewertungen – die sind Gold wert.</li>
      </ul>

      <h2>Nachhaltigkeit im Fokus</h2>
      <p>
        2025 achten Nutzer immer stärker auf Unternehmen, die nachhaltig handeln. Das gilt auch für Ihre Website. Transparenz und Authentizität kommen an:
      </p>
      <ul>
        <li>Zeigen Sie, was Sie für die Umwelt tun – etwa durch nachhaltige Projekte oder Produkte.</li>
        <li>Integrieren Sie relevante Begriffe wie „nachhaltig" oder „umweltfreundlich", wenn sie zu Ihrem Angebot passen.</li>
      </ul>

      <h2>Fazit: So gewinnen Sie mit SEO 2025</h2>
      <p>
        Die wichtigste Regel bleibt: Denken Sie an Ihre Nutzer. Eine schnelle, gut strukturierte Website mit hilfreichen Inhalten, die Vertrauen aufbaut, wird auch in den Suchmaschinen belohnt.
      </p>
      <p>
        Haben Sie Fragen oder möchten Sie Ihre SEO-Strategie professionell optimieren lassen? neoframe.ch unterstützt Sie dabei, das Beste aus Ihrer Online-Präsenz herauszuholen. Kontaktieren Sie uns – wir machen Ihre Website sichtbar!
      </p>
    `
  },
  'google-ads': {
    title: 'Google Ads: Strategien für höhere Conversion Rates',
    category: 'Google Ads',
    author: 'Lisa Müller',
    date: '2024-03-05',
    readTime: '10 min',
    content: `
      <p class="lead">
        Google Ads ist eines der mächtigsten Tools im Online-Marketing. Doch der Erfolg einer Kampagne misst sich nicht allein an Klicks, sondern vor allem an der Conversion Rate – also daran, wie viele der Besucher tatsächlich eine gewünschte Aktion ausführen, wie etwa einen Kauf, eine Anmeldung oder das Ausfüllen eines Formulars.
      </p>

      <h2>1. Die richtige Zielgruppe ansprechen</h2>
      <p>
        Ihre Anzeigen können nur erfolgreich sein, wenn sie die passenden Menschen erreichen. Nutzen Sie die umfassenden Targeting-Optionen von Google Ads:
      </p>
      <ul>
        <li>Keywords gezielt auswählen: Verwenden Sie Longtail-Keywords, die spezifisch auf die Suchintention Ihrer Zielgruppe eingehen.</li>
        <li>Demografische Daten nutzen: Alter, Geschlecht, Standort und Interessen helfen dabei, Ihre Zielgruppe genauer anzusprechen.</li>
        <li>Remarketing einsetzen: Mit Remarketing können Sie Nutzer erneut ansprechen, die Ihre Website bereits besucht haben.</li>
      </ul>

      <h2>2. Relevante und ansprechende Anzeigen</h2>
      <p>
        Eine hohe Relevanz zwischen der Suchanfrage und Ihrer Anzeige ist entscheidend für den Erfolg:
      </p>
      <ul>
        <li>Ansprechender Anzeigentitel: Nutzen Sie klare, prägnante Überschriften mit starken Keywords.</li>
        <li>Hervorhebung von Vorteilen: Zeigen Sie, was Ihre Dienstleistung oder Ihr Produkt besonders macht.</li>
        <li>Call-to-Action (CTA): Fügen Sie einen klaren Handlungsaufruf ein.</li>
        <li>Anzeigenerweiterungen: Verwenden Sie Sitelinks, Anruf-Erweiterungen oder Bewertungen.</li>
      </ul>

      <h2>3. Landingpages optimieren</h2>
      <p>
        Ihre Anzeige ist der erste Schritt, aber die Landingpage entscheidet oft über die Conversion:
      </p>
      <ul>
        <li>Relevanter Inhalt: Die Inhalte der Landingpage sollten direkt zur Suchintention passen.</li>
        <li>Klarer Aufbau: Strukturiertes Design mit einer klar sichtbaren CTA.</li>
        <li>Schnelle Ladezeiten: Eine langsame Seite führt häufig zu Absprüngen.</li>
        <li>Mobile Optimierung: Ihre Landingpage muss auf allen Geräten perfekt funktionieren.</li>
      </ul>

      <h2>4. A/B-Tests durchführen</h2>
      <p>
        Testen Sie verschiedene Varianten Ihrer Anzeigen und Landingpages:
      </p>
      <ul>
        <li>Anzeigen: Testen Sie unterschiedliche Headlines, Texte und CTAs.</li>
        <li>Landingpages: Vergleichen Sie verschiedene Layouts und Button-Positionen.</li>
        <li>Keywords: Experimentieren Sie mit verschiedenen Keyword-Optionen.</li>
      </ul>

      <h2>5. Conversion Tracking einrichten</h2>
      <p>
        Ohne gutes Tracking wissen Sie nicht, was funktioniert:
      </p>
      <ul>
        <li>Google Analytics: Verfolgen Sie das Nutzerverhalten auf Ihrer Website.</li>
        <li>Conversion-Tracking: Richten Sie spezifische Ziele ein.</li>
        <li>UTM-Parameter: Analysieren Sie die Leistung Ihrer Anzeigen genau.</li>
      </ul>

      <h2>Fazit: Erfolg durch kontinuierliche Optimierung</h2>
      <p>
        Google Ads ist ein kraftvolles Tool, aber der Schlüssel zum Erfolg liegt in der richtigen Strategie und kontinuierlichen Optimierung. Mit den richtigen Einstellungen und regelmäßiger Analyse können Sie Ihre Conversion Rates deutlich steigern.
      </p>
      <p>
        Möchten Sie Ihre Google Ads Kampagnen optimieren? neoframe.ch unterstützt Sie dabei, das Beste aus Ihrem Marketing-Budget herauszuholen. Kontaktieren Sie uns für eine professionelle Beratung!
      </p>
    `
  },
  'responsive-design': {
    title: 'Responsive Webdesign: Best Practices für mobile Nutzer',
    category: 'Webdesign',
    author: 'Michael Schmidt',
    date: '2024-03-10',
    readTime: '6 min',
    content: `
      <p class="lead">
        In einer Welt, in der immer mehr Menschen über Smartphones und Tablets auf Websites zugreifen, ist Responsive Webdesign unverzichtbar geworden. Eine Website, die sich flexibel an verschiedene Bildschirmgrößen anpasst, bietet nicht nur ein besseres Nutzererlebnis, sondern sorgt auch für bessere Rankings bei Suchmaschinen.
      </p>

      <h2>Warum Responsive Webdesign wichtig ist</h2>
      <p>
        Der Anteil der mobilen Nutzer wächst stetig. Eine nicht mobil optimierte Website bedeutet frustrierte Nutzer und verlorene Kunden:
      </p>
      <ul>
        <li>Bessere Nutzererfahrung auf allen Geräten</li>
        <li>Höhere Conversion-Raten durch einfache Bedienung</li>
        <li>Besseres Google-Ranking durch Mobile-First-Indexierung</li>
      </ul>

      <h2>Best Practices für Responsive Design</h2>
      <h3>1. Mobile-First-Ansatz</h3>
      <p>
        Beginnen Sie mit dem Design für mobile Geräte und erweitern Sie es für größere Bildschirme:
      </p>
      <ul>
        <li>Fokus auf wesentliche Inhalte</li>
        <li>Klare Hierarchie der Informationen</li>
        <li>Optimierte Touch-Bedienung</li>
      </ul>

      <h3>2. Flexible Layouts</h3>
      <p>
        Nutzen Sie moderne CSS-Techniken für anpassungsfähige Layouts:
      </p>
      <ul>
        <li>CSS Grid und Flexbox für flexible Strukturen</li>
        <li>Relative Einheiten statt fixer Pixel</li>
        <li>Breakpoints für verschiedene Bildschirmgrößen</li>
      </ul>

      <h3>3. Performance optimieren</h3>
      <p>
        Schnelle Ladezeiten sind besonders auf mobilen Geräten wichtig:
      </p>
      <ul>
        <li>Bildoptimierung für verschiedene Bildschirmgrößen</li>
        <li>Lazy Loading für Bilder und Videos</li>
        <li>Minimierter Code und effiziente Ressourcen</li>
      </ul>

      <h2>Testen und Optimieren</h2>
      <p>
        Regelmäßiges Testen auf verschiedenen Geräten ist essentiell:
      </p>
      <ul>
        <li>Cross-Browser-Tests</li>
        <li>Geräteübergreifende Funktionsprüfung</li>
        <li>Performance-Monitoring</li>
      </ul>

      <p>
        Möchten Sie Ihre Website responsiv gestalten? neoframe.ch unterstützt Sie mit professionellem Webdesign und technischer Expertise. Kontaktieren Sie uns – gemeinsam machen wir Ihre Website fit für alle Geräte!
      </p>
    `
  }
};

export function BlogPost() {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Artikel nicht gefunden</h1>
            <Link to="/blog" className="text-[#feefde] hover:text-[#feefde]/80 transition-colors">
              Zurück zur Blogübersicht
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-[#feefde] hover:text-[#feefde]/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Blogübersicht
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm mb-6">
            <span className="bg-[#feefde] text-black px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString('de-CH')}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-gray-400">Von {post.author}</p>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#feefde] prose-a:no-underline hover:prose-a:text-[#feefde]/80 prose-strong:text-white prose-ul:text-gray-300 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}