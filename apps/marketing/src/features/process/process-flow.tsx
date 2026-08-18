import { processStages } from "@/config/process/stages";
import { ProcessStep } from "@/features/process/process-step";

/**
 * Mobile/tablet: vertical sequence with a connector rail (required —
 * no horizontal overflow, fully readable without hover). Desktop
 * (`lg`+): 3-column × 2-row grid rather than 6 cramped horizontal
 * columns — six stages with four data fields each don't fit
 * legibly in a single row without truncating content the brief
 * explicitly asked for (business goal, stage result, deliverable,
 * transition criterion). This is the "складна grid-композиція"
 * alternative the brief allows in place of a literal horizontal
 * pipeline.
 */
export function ProcessFlow() {
  return (
    <ol className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6">
      {processStages.map((stage) => (
        <li key={stage.code}>
          <ProcessStep stage={stage} isLast={stage.index === processStages.length} />
        </li>
      ))}
    </ol>
  );
}
