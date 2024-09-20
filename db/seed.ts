import { db } from './client';
import { entries, EntryInsert } from './schemas';

const dummyEntries: EntryInsert[] = [
  {
    title: 'Spektakuläre Robbenkolonie an sonnigem Tag entdeckt',
    content:
      'Heute erlebten wir einen atemberaubenden Anblick: Eine große Robbenkolonie, die sich auf den Felsen am Strand sonnte. Der klare, blaue Himmel und das glitzernde Meer boten die perfekte Kulisse. Wir beobachteten fasziniert, wie die Robben sich räkelten, miteinander spielten und ins Wasser glitten. Besonders niedlich waren die Jungtiere, die unbeholfen über die Felsen kletterten. Ein unvergesslicher Tag in der Natur!',
    image: '',
    weather: 'sunny',
  },
  {
    title: 'Regnerische Überraschung bei der Robbenbeobachtung',
    content:
      'Trotz des anhaltenden Regens wagten wir uns heute zur Robbenbucht – und wurden belohnt! Die grauen Wolken und der feine Nieselregen schienen die Robben nicht zu stören. Im Gegenteil, sie wirkten besonders aktiv. Wir sahen, wie sie elegant durchs Wasser glitten und sich gegenseitig neckten. Der Regen verlieh der Szene eine fast mystische Atmosphäre, und die Wassertropfen auf den glänzenden Robbenfellen boten ein faszinierendes Schauspiel. Ein Beweis, dass auch "schlechtes" Wetter wunderbare Naturerlebnisse bieten kann!',
    image:
      'https://images.unsplash.com/photo-1674488684866-2b7ec3f9e499?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    weather: 'rain',
  },
  {
    title: 'Gemütlicher Robbentag unter Wolkendecke',
    content:
      'Ein bedeckter Himmel empfing uns heute an der Bucht, doch die Robben ließen sich davon nicht beeindrucken. Die diffuse Beleuchtung schuf eine friedliche Atmosphäre. Wir beobachteten, wie eine Gruppe von Robben sich auf den Felsen ausruhte, während andere im ruhigen Wasser schwammen. Besonders interessant war es, ihr soziales Verhalten zu beobachten – von zärtlichen Berührungen bis hin zu spielerischen Kämpfen. Die gedämpften Farben der Umgebung ließen die Robben noch mehr hervorstechen. Ein Tag, der zeigte, dass die Schönheit der Natur in jeder Wetterlage zu finden ist.',
    image:
      'https://images.unsplash.com/photo-1675749958039-2b9191404441?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    weather: 'cloudy',
  },
  {
    title: 'Dramatische Wolkenkulisse bei der Robbenbeobachtung',
    content:
      'Heute bot sich uns ein beeindruckendes Naturschauspiel: Dunkle, dramatische Wolken türmten sich am Himmel auf, während wir die Robben beobachteten. Die Lichtverhältnisse wechselten ständig und tauchten die Szene in ein faszinierendes Spiel aus Licht und Schatten. Die Robben schienen die Spannung in der Luft zu spüren – sie waren besonders lebhaft und sprangen immer wieder ins Wasser. Wir hatten das Glück, einen Moment zu erleben, in dem ein Sonnenstrahl durch die Wolken brach und die nassen Robbenkörper zum Glitzern brachte. Ein Tag, der die wilde Schönheit der Natur in all ihrer Pracht zeigte.',
    image:
      'https://images.unsplash.com/photo-1509992830113-ee4724478334?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    weather: 'cloudy',
  },
  {
    title: 'Robben-Familienleben an einem grauen Tag',
    content:
      'Der heutige bewölkte Tag bot uns einen intimen Einblick in das Familienleben der Robben. Wir beobachteten, wie Mütter ihre Jungen säugten und beschützten. Die Jungtiere, mit ihrem flauschigen Fell, tollten verspielt herum und übten ihre Schwimmkünste in flachen Gezeitentümpeln. Es war faszinierend zu sehen, wie geduldig die erwachsenen Robben mit ihrem Nachwuchs umgingen. Trotz des trüben Wetters herrschte eine friedliche, fast meditative Stimmung an der Bucht. Dieser Tag erinnerte uns daran, wie ähnlich Tiere und Menschen in ihrer Fürsorge und Liebe für die Familie sind.',
    image:
      'https://images.unsplash.com/photo-1557259790-002fd8635725?q=80&w=2995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    weather: 'cloudy',
  },
  {
    title: 'Robben trotzen dem aufziehenden Sturm',
    content:
      'Ein aufregender Tag an der Küste: Dunkle Wolken kündigten einen nahenden Sturm an, doch die Robben zeigten sich unbeeindruckt. Der aufkommende Wind peitschte das Meer auf und schuf eine dramatische Kulisse. Wir beobachteten fasziniert, wie die Robben geschickt durch die wachsenden Wellen navigierten. Einige schienen das turbulente Wetter regelrecht zu genießen und vollführten akrobatische Sprünge im aufgewühlten Wasser. Andere suchten Schutz auf höher gelegenen Felsen. Die Kraft der Natur war heute besonders spürbar, und die Robben zeigten eindrucksvoll ihre perfekte Anpassung an dieses raue Umfeld. Ein Tag, der uns die Widerstandsfähigkeit und Anmut dieser erstaunlichen Tiere vor Augen führte.',
    image:
      'https://images.unsplash.com/photo-1638754813271-5ab5a7df2940?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    weather: 'cloudy',
  },
];
// seed that shit

db.insert(entries)
  .values(dummyEntries)
  .then(() => {
    console.log('Seeded Successfully');
    process.exit(0);
  })
  .catch((err) => console.error(err));
