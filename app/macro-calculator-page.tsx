'use client';
import { ArrowRight, BrainCircuit, Camera, Calculator, Utensils } from 'lucide-react';
import { MacroTargetForm } from './macro-target-editor';
import { remainingText, targetProgress } from './macro-targets';
import { totals, type Entry, type MacroTargets, type Profile } from './model';

export function MacroCalculatorPage({ entries, profile, day, busy, addPhoto, openFood, saveTargets }: {
  entries: Entry[]; profile: Profile; day: string; busy: boolean; addPhoto: () => void;
  openFood: () => void; saveTargets: (targets: MacroTargets) => Promise<boolean>;
}) {
  const eaten = totals(entries.filter(entry => entry.day === day));
  const target = profile.macroTargets;
  const rows = target ? [
    ['Energia', eaten.kcal, target.kcal, 'kcal'],
    ['Proteiini', eaten.p, target.p, 'g'],
    ['Hiilihydraatit', eaten.c, target.c, 'g'],
    ['Rasva', eaten.f, target.f, 'g'],
  ] as const : [];

  return <>
    <div className="section-heading"><div><span className="eyebrow">MAKROT</span><h1>Laske ja seuraa makroja.</h1><p>Aseta päivän tavoite, arvioi ateria kuvasta ja katso paljonko on jäljellä.</p></div></div>
    <div className="macro-page-grid">
      <section className="card macro-page-calculator"><div className="card-heading"><div><span className="eyebrow">OMA TAVOITE</span><h2>Makrolaskuri</h2></div><span className="square-icon mint"><Calculator size={21}/></span></div><MacroTargetForm current={target} busy={busy} save={saveTargets}/></section>
      <div className="stack">
        <section className="card macro-photo-card"><span className="square-icon peach"><Camera size={22}/></span><span className="eyebrow">ATERIA KUVASTA TAI TEKSTISTÄ</span><h2>Kerro mitä söit.</h2><p>Lisää kuva tai kirjoita annoksen sisältö ja määrät. Näet arvion, voit täydentää grammoja ja korjata makrot ennen tallennusta.</p><button className="primary full" onClick={addPhoto}><BrainCircuit size={18}/>Avaa ateria-arvio <ArrowRight size={17}/></button><small>Kuva ei paljasta annoksen painoa tai tarkkoja makroja. Kirjoitetusta kuvauksesta tunnistetaan rajattu joukko ruokia.</small></section>
        <section className="card"><div className="card-heading"><div><span className="eyebrow">TÄNÄÄN</span><h2>{target ? 'Tavoitteen etenemä' : 'Päivän kertymä'}</h2></div></div>
          {target ? <div className="macro-page-progress">{rows.map(([label, value, goal, unit]) => <div className="macro-progress" key={label}><div><strong>{label}</strong><span>{remainingText(value, goal, unit)}</span></div><div className="progress"><i style={{ width: `${targetProgress(value, goal)}%` }}/></div><small>{Math.round(value)} / {Math.round(goal)} {unit}</small></div>)}</div> : <p className="muted">Tallenna tavoite laskurilla. Sitten näet tästä päivän jäljellä olevat määrät.</p>}
          <button className="secondary full macro-diary-link" onClick={openFood}><Utensils size={17}/>Avaa ateriapäiväkirja<ArrowRight size={16}/></button>
        </section>
      </div>
    </div>
  </>;
}
