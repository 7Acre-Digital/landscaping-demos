/* ============================================================================
   PROSCAPES PRICE SHEET: the ONE place to edit prices.
   ----------------------------------------------------------------------------
   Every number below is a SAMPLE placeholder for the concept preview.
   Chad has not published prices. Swap in his real numbers here and the price
   sheet, the running estimate and the booking summary all update. No rebuild needed.

   Item fields:
     id        unique key (letters/numbers, no spaces)
     name      what the customer sees
     desc      one short line
     from      "starting at" price in dollars (number), or null = "Custom quote"
     unit      text after the price, e.g. "per bed", "per head" ("" for a flat job)
     qty       true = show a - / + quantity stepper (price x quantity)
     recurring "visit" = billed per visit (kept out of the one-time total)
     free      true = shows "Free" (from must be 0)
   ========================================================================== */
window.PROSCAPES_PRICING = {
  sample: true, // false hides the "sample pricing" badge once real prices are in
  note: 'Sample pricing for this preview. Chad sets final prices.',
  categories: [
    { id: 'landscaping', label: 'Landscaping', items: [
      { id: 'design',   name: 'On-site estimate & design consult', desc: 'Chad walks the property and works through your ideas.', from: 0, unit: '', free: true },
      { id: 'beds',     name: 'Flowerbed creation',      desc: 'Shaped, edged and planted new beds.',              from: 650,  unit: 'per bed',  qty: true },
      { id: 'plants',   name: 'Tree & shrub planting',   desc: 'Shade trees, screening shrubs, foundation plants.', from: 85,   unit: 'per plant', qty: true },
      { id: 'sod',      name: 'Sod installation',        desc: 'Full, even lawn, installed and rolled.',            from: 1400, unit: 'small yard' },
      { id: 'hydro',    name: 'Hydromulch',              desc: 'Seeded lawn for large or sloped areas.',            from: 900,  unit: 'starter area' }
    ]},
    { id: 'hardscape', label: 'Hardscape', items: [
      { id: 'patio',    name: 'Stone or concrete patio', desc: 'Concrete and stone work, laid flat and drained.',   from: 3800, unit: '' },
      { id: 'walk',     name: 'Walkway',                 desc: 'Stone path or stepping stones.',                    from: 1800, unit: '' },
      { id: 'wall',     name: 'Retaining wall',          desc: 'Holds the slope and terraces the yard.',            from: 2900, unit: '' },
      { id: 'water',    name: 'Water feature',           desc: 'Bubbler, fountain or stone-ringed pond.',           from: 2400, unit: '' },
      { id: 'renew',    name: 'Hardscape renewal',       desc: 'Clean up and reset existing stone and edging.',     from: 450,  unit: '' }
    ]},
    { id: 'irrigation', label: 'Irrigation', items: [
      { id: 'sprinkler', name: 'New sprinkler system',   desc: 'Multi-zone residential system, licensed install.',  from: 3200, unit: '' },
      { id: 'commercial',name: 'Commercial irrigation',  desc: 'Designed for the property, budget and terrain.',    from: null, unit: '' },
      { id: 'repair',    name: 'Sprinkler repair visit', desc: 'Diagnose and fix leaks, breaks and dead zones.',    from: 125,  unit: 'per visit' },
      { id: 'heads',     name: 'Sprinkler head replacement', desc: 'Swap broken or worn heads.',                    from: 45,   unit: 'per head', qty: true },
      { id: 'valve',     name: 'Valve locate',           desc: 'Find buried or lost valves.',                       from: 150,  unit: '' },
      { id: 'controller',name: 'Controller programming', desc: 'Seasonal schedule set for your zones.',             from: 85,   unit: '' }
    ]},
    { id: 'lake', label: 'Lake pumps', items: [
      { id: 'pumpnew',  name: 'Lake pump install',       desc: 'Water the yard straight from the lake.',            from: 2400, unit: '' },
      { id: 'pumprep',  name: 'Lake pump replacement',   desc: 'Swap out a failed or undersized pump.',             from: 1600, unit: '' },
      { id: 'pumpdiag', name: 'Pump & system diagnostic',desc: 'Find out why the system is not pulling water.',     from: 150,  unit: '' }
    ]},
    { id: 'drainage', label: 'Drainage & dirt work', items: [
      { id: 'french',   name: 'French drain',            desc: 'Moves standing water away from the house.',         from: 1800, unit: '' },
      { id: 'grading',  name: 'Dirt work & grading',     desc: 'Set the levels before anything goes in.',           from: 850,  unit: '' },
      { id: 'clearing', name: 'Lot clearing',            desc: 'Brush, scrub and overgrowth cleared out.',          from: 1200, unit: '' },
      { id: 'stump',    name: 'Stump removal',           desc: 'Ground out below grade.',                           from: 150,  unit: 'per stump', qty: true },
      { id: 'haul',     name: 'Haul-off',                desc: 'Debris loaded and hauled away.',                    from: 300,  unit: 'per load',  qty: true }
    ]},
    { id: 'lawn', label: 'Lawn care', items: [
      { id: 'mow',      name: 'Weekly mowing, trimming & edging', desc: 'Same crew, same day, every week.',          from: 55,   unit: 'per visit', recurring: 'visit' },
      { id: 'hedge',    name: 'Hedging',                 desc: 'Shaped and cleaned up.',                            from: 150,  unit: '' },
      { id: 'mulch',    name: 'Weeding & mulching',      desc: 'Beds weeded and topped with fresh mulch.',          from: 350,  unit: '' },
      { id: 'fert',     name: 'Fertilizing',             desc: 'Seasonal feeding for a thicker lawn.',              from: 75,   unit: 'per application' },
      { id: 'trim',     name: 'Tree trimming',           desc: 'Raise, thin and clear limbs.',                      from: 250,  unit: 'per tree', qty: true },
      { id: 'removal',  name: 'Tree removal',            desc: 'Taken down and hauled off.',                        from: 600,  unit: 'per tree', qty: true }
    ]}
  ]
};
