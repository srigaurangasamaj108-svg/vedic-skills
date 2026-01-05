taxonomy/
├─ canon_type/
│  ├─ sruti
│  │  ├─ rig_veda
│  │  ├─ yajur_veda
│  │  ├─ sama_veda
│  │  ├─ atharva_veda
│  │  └─ upanisads
│  ├─ smrti
│  │  ├─ bhagavad_gita
│  │  ├─ manusmriti
│  │  ├─ yajnavalkya_smriti
│  │  └─ narada_smriti
│  ├─ itihasa
│  │  ├─ mahabharata
│  │  └─ ramayana
│  ├─ purana
│  │  ├─ srimad_bhagavatam
│  │  ├─ vishnu_purana
│  │  ├─ padma_purana
│  │  └─ garuda_purana
│  └─ agama
│     ├─ pancaratra
│     ├─ vaikhanasa
│     └─ saiva_agama
│
├─ text/
│  ├─ bhagavad_gita
│  ├─ srimad_bhagavatam
│  ├─ upanisads
│  │  ├─ isa
│  │  ├─ kena
│  │  ├─ katha
│  │  ├─ chandogya
│  │  └─ brihadaranyaka
│  ├─ mahabharata
│  └─ ramayana
│
├─ structure/
│  ├─ canto
│  ├─ chapter
│  ├─ verse
│  ├─ section
│  └─ subsection
│
├─ tradition/
│  ├─ gaudiya_vaishnava
│  ├─ sri_vaishnava
│  ├─ madhva
│  ├─ advaita
│  ├─ saiva
│  └─ shakta
│
├─ language/
│  ├─ sanskrit
│  ├─ prakrit
│  ├─ pali
│  ├─ avadhi
│  ├─ bengali
│  ├─ hindi
│  └─ english
│
├─ purushartha/
│  ├─ dharma
│  │  ├─ varnashrama
│  │  ├─ sadachara
│  │  └─ rajadharma
│  ├─ artha
│  │  ├─ governance
│  │  ├─ economy
│  │  └─ household_life
│  ├─ kama
│  │  ├─ aesthetics
│  │  ├─ family_life
│  │  └─ emotional_culture
│  └─ moksha
│     ├─ bhakti
│     ├─ jnana
│     └─ vairagya
│
├─ darsana/
│  ├─ samkhya
│  ├─ yoga
│  ├─ nyaya
│  ├─ vaisheshika
│  ├─ mimamsa
│  └─ vedanta
│     ├─ advaita
│     ├─ vishishtadvaita
│     └─ dvaita
│
├─ yoga_path/
│  ├─ bhakti_yoga
│  ├─ jnana_yoga
│  ├─ karma_yoga
│  └─ dhyana_yoga
│
├─ ethical_axis/
│  ├─ duty
│  ├─ renunciation
│  ├─ compassion
│  ├─ discipline
│  └─ service
│
├─ ontological_focus/
│  ├─ jiva
│  ├─ prakriti
│  ├─ isvara
│  └─ kala
│
├─ content_type/
│  ├─ canonical_text
│  ├─ commentary
│  ├─ article
│  ├─ booklet
│  ├─ pocket_book
│  ├─ pdf
│  └─ multimedia
│
├─ access_level/
│  ├─ public
│  ├─ registered
│  └─ private
│
└─ usage_context/
   ├─ study
   ├─ teaching
   ├─ reference
   ├─ contemplation
   └─ community_discussion


Each taxonomy has a role, not equal weight.

Role	                      Taxonomies
Identity	        canon_type, text, structure
Voice / Lens	            tradition, darśana
Theme	                puruṣārtha, yoga_path
Format	                content_type, language
Access	                    access_level
Context	            usage_context, ethical_axis





taxonomy_assignment_model/
│
├─ MANDATORY/                      # always required to publish
│  │
│  ├─ identity/
│  │  ├─ canon_type/               # sruti | smriti | itihasa | purana | agama
│  │  ├─ text/                     # bhagavad_gita | bhagavatam | upanisads
│  │  └─ structure/                # chapter | verse | canto | section
│  │
│  ├─ format/
│  │  ├─ content_type/             # canonical_text | commentary | article | pdf
│  │  └─ language/                 # sanskrit | english | hindi | bengali
│  │
│  └─ access/
│     └─ access_level/             # public | registered | private
│
├─ PRIMARY/                        # usually required, chosen consciously
│  │
│  ├─ tradition_lens/
│  │  └─ tradition/                # gaudiya | sri_vaishnava | advaita | saiva
│  │
│  ├─ thematic_axis/
│  │  ├─ purushartha/              # dharma | artha | kama | moksha
│  │  └─ yoga_path/                # bhakti | karma | jnana | dhyana
│  │
│  ├─ usage/
│  │  └─ usage_context/            # study | teaching | contemplation
│  │
│  └─ relationship/
│     └─ related_texts/            # links to canon (gita, bhagavatam, etc.)
│
├─ OPTIONAL_DERIVED/               # suggested, inferred, or curated later
│  │
│  ├─ philosophical_depth/
│  │  ├─ darshana/                 # vedanta | yoga | samkhya | mimamsa
│  │  └─ ontological_focus/        # jiva | prakriti | isvara | kala
│  │
│  ├─ ethical_orientation/
│  │  └─ ethical_axis/             # duty | renunciation | compassion | service
│  │
│  ├─ canonical_derivations/       # auto-suggested by system
│  │  ├─ inferred_canon_type/      # from text → canon_type
│  │  ├─ inferred_yoga_path/       # from tradition → yoga_path
│  │  └─ inferred_purushartha/     # from content patterns
│  │
│  └─ enrichment/
│     ├─ keywords/                 # free-form (editorial)
│     ├─ cross_links/              # verses, articles, PDFs
│     └─ study_paths/              # beginner | householder | renunciate
│
└─ SYSTEM_RULES/
   │
   ├─ assignment_limits/
   │  ├─ max_mandatory: 4–6
   │  ├─ max_primary: 2–4
   │  └─ max_optional: unlimited
   │
   ├─ inheritance_rules/
   │  ├─ commentary → inherits text + structure
   │  ├─ pdf → no structure required
   │  └─ article → no canon_type required
   │
   └─ visibility_rules/
      ├─ beginner_ui → mandatory + primary only
      ├─ scholar_ui → all layers visible
      └─ editor_ui → context-sensitive fields
